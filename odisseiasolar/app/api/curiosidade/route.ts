import { cacheLife } from "next/cache";
import { connection } from "next/server";
import type { Curiosidade } from "../../data/tipos";


const URL_APOD = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY ?? "DEMO_KEY"}`;
const URL_TRADUCAO = `https://api.mymemory.translated.net/get?langpair=en|pt-BR${
  process.env.MYMEMORY_EMAIL ? `&de=${process.env.MYMEMORY_EMAIL}` : ""
}&q=`;
const LIMITE_BYTES = 450; 
const TEMPO_LIMITE = 10_000; 

let ultimaCuriosidade: Curiosidade | null = null;

type RespostaApod = {
  date: string;
  title: string;
  explanation: string;
  copyright?: string;
};

async function buscarApod(): Promise<RespostaApod> {
  "use cache";
  cacheLife("hours");

  const resposta = await fetch(URL_APOD, { signal: AbortSignal.timeout(TEMPO_LIMITE) });
  if (!resposta.ok) throw new Error(`NASA respondeu ${resposta.status}`);
  return resposta.json();
}

// Cada texto é traduzido uma única vez (o cache usa o próprio texto como chave),
// para não gastar o limite diário gratuito da MyMemory.
async function traduzir(texto: string): Promise<string> {
  "use cache";
  cacheLife("days");

  // Junta frases em blocos de até LIMITE_BYTES e traduz cada bloco.
  const blocos: string[] = [];
  for (const frase of texto.match(/[^.!?]+[.!?]*\s*/g) ?? [texto]) {
    const ultimo = blocos.length - 1;
    if (ultimo >= 0 && new TextEncoder().encode(blocos[ultimo] + frase).length <= LIMITE_BYTES) {
      blocos[ultimo] += frase;
    } else {
      blocos.push(frase);
    }
  }

  const traducoes = await Promise.all(
    blocos.map(async (bloco) => {
      const resposta = await fetch(URL_TRADUCAO + encodeURIComponent(bloco.trim()), {
        signal: AbortSignal.timeout(TEMPO_LIMITE),
      });
      const dados = await resposta.json();
      if (Number(dados.responseStatus) !== 200) throw new Error(`MyMemory respondeu ${dados.responseStatus}`);
      return dados.responseData.translatedText as string;
    }),
  );
  return traducoes.join(" ");
}

export async function GET() {
  // Executa só no momento da requisição (não no build), para nunca congelar uma resposta antiga ou de erro.
  await connection();
  try {
    const apod = await buscarApod();
    const [titulo, explicacao] = await Promise.all([traduzir(apod.title), traduzir(apod.explanation)]);

    ultimaCuriosidade = {
      data: apod.date,
      titulo,
      explicacao,
      link: `https://apod.nasa.gov/apod/ap${apod.date.slice(2).replaceAll("-", "")}.html`,
      creditos: apod.copyright?.trim() ?? null,
    };
    return Response.json(ultimaCuriosidade);
  } catch (erro) {
    console.error("[api/curiosidade]", erro);
    if (ultimaCuriosidade) return Response.json(ultimaCuriosidade);
    return Response.json({ erro: "Não foi possível buscar a curiosidade do dia." }, { status: 502 });
  }
}