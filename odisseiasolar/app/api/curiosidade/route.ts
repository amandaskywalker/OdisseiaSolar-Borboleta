import { cacheLife } from "next/cache";
import { connection } from "next/server";
import type { Curiosidade } from "../../data/tipos";

// Wikipédia em português: gratuita, sem chave e já em português (não precisa de tradução).
const URL_RESUMO = "https://pt.wikipedia.org/api/rest_v1/page/summary/";
// A Wikimedia pede que quem usa a API se identifique por este cabeçalho.
const IDENTIFICACAO = { "Api-User-Agent": "site-educativo-astronomia/1.0" };
const TEMPO_LIMITE = 10_000;

// Um tema por dia, em sequência. `artigo` é o nome exato da página na Wikipédia;
// `titulo` é o que aparece no card (alguns artigos usam a grafia de Portugal).
const TEMAS = [
  { artigo: "Sol", titulo: "Sol" },
  { artigo: "Mercúrio (planeta)", titulo: "Mercúrio" },
  { artigo: "Vênus (planeta)", titulo: "Vênus" },
  { artigo: "Terra", titulo: "Terra" },
  { artigo: "Lua", titulo: "Lua" },
  { artigo: "Marte (planeta)", titulo: "Marte" },
  { artigo: "Júpiter (planeta)", titulo: "Júpiter" },
  { artigo: "Saturno (planeta)", titulo: "Saturno" },
  { artigo: "Urano (planeta)", titulo: "Urano" },
  { artigo: "Netuno (planeta)", titulo: "Netuno" },
  { artigo: "Plutão", titulo: "Plutão" },
  { artigo: "Cinturão de asteroides", titulo: "Cinturão de asteroides" },
  { artigo: "Cinturão de Kuiper", titulo: "Cinturão de Kuiper" },
  { artigo: "Nuvem de Oort", titulo: "Nuvem de Oort" },
  { artigo: "Cometa Halley", titulo: "Cometa Halley" },
  { artigo: "Europa (satélite)", titulo: "Europa, lua de Júpiter" },
  { artigo: "Titã (satélite)", titulo: "Titã, lua de Saturno" },
  { artigo: "Io (satélite)", titulo: "Io, lua de Júpiter" },
  { artigo: "Ganimedes (satélite)", titulo: "Ganimedes, lua de Júpiter" },
  { artigo: "Encélado (satélite)", titulo: "Encélado, lua de Saturno" },
  { artigo: "Ceres (planeta anão)", titulo: "Ceres" },
  { artigo: "Eclipse solar", titulo: "Eclipse solar" },
  { artigo: "Aurora polar", titulo: "Aurora polar" },
  { artigo: "Via Láctea", titulo: "Via Láctea" },
  { artigo: "Buraco negro", titulo: "Buraco negro" },
  { artigo: "Telescópio Espacial James Webb", titulo: "Telescópio Espacial James Webb" },
  { artigo: "Estação Espacial Internacional", titulo: "Estação Espacial Internacional" },
  { artigo: "Voyager 1", titulo: "Voyager 1" },
  { artigo: "Apollo 11", titulo: "Apollo 11" },
  { artigo: "Sistema Solar", titulo: "Sistema Solar" },
];

let ultimaCuriosidade: Curiosidade | null = null;

type RespostaWikipedia = {
  extract: string;
  content_urls: { desktop: { page: string } };
};

// Cada artigo é buscado uma única vez a cada poucos dias, para respeitar o limite de uso da Wikipédia.
async function buscarResumo(artigo: string): Promise<RespostaWikipedia> {
  "use cache";
  cacheLife("days");

  const resposta = await fetch(URL_RESUMO + encodeURIComponent(artigo), {
    headers: IDENTIFICACAO,
    signal: AbortSignal.timeout(TEMPO_LIMITE),
  });
  if (!resposta.ok) throw new Error(`Wikipédia respondeu ${resposta.status}`);
  return resposta.json();
}

export async function GET() {
  // Executa só no momento da requisição (não no build), para nunca congelar uma resposta antiga ou de erro.
  await connection();

  // Data de hoje no horário de Brasília, no formato "AAAA-MM-DD".
  const hoje = new Date().toLocaleDateString("en-CA", { timeZone: "America/Sao_Paulo" });
  const numeroDoDia = Math.floor(Date.parse(hoje) / 86_400_000);
  const tema = TEMAS[numeroDoDia % TEMAS.length];

  try {
    const resumo = await buscarResumo(tema.artigo);
    ultimaCuriosidade = {
      data: hoje,
      titulo: tema.titulo,
      explicacao: resumo.extract,
      link: resumo.content_urls.desktop.page,
    };
    return Response.json(ultimaCuriosidade);
  } catch (erro) {
    console.error("[api/curiosidade]", erro);
    if (ultimaCuriosidade) return Response.json(ultimaCuriosidade);
    return Response.json({ erro: "Não foi possível buscar a curiosidade do dia." }, { status: 502 });
  }
}
