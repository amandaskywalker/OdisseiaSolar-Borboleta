export type ParteVisual = { classe: string; titulo?: string };

export type Astro = {
  slug: string;
  nome: string;
  tituloHome: string;
  detalheHome: string;
  classe: string;
  partes: ParteVisual[];
  descricao: string;
  secoes: { titulo: string; itens: { termo: string; texto: string }[] }[];
};

export type Pergunta = {
  pergunta: string;
  opcoes: string[];
  correta: number;
  dica: string;
  justificativa: string;
};

// Formato devolvido pela rota local /api/curiosidade (dados da NASA APOD).
export type Curiosidade = {
  data: string;       // "AAAA-MM-DD"
  titulo: string;
  explicacao: string; // texto original da NASA (em inglês)
  imagem: string | null; // foto do dia (ou miniatura, quando o APOD do dia é um vídeo)
  link: string;          // página do APOD do dia no site da NASA
  creditos: string | null;
};