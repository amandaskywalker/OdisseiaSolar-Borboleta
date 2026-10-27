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
