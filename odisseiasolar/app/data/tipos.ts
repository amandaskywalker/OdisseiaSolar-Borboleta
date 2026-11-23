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

// Formato devolvido pela rota local /api/curiosidade (resumo da Wikipédia em português).
export type Curiosidade = {
  data: string;       // "AAAA-MM-DD"
  titulo: string;
  explicacao: string; // resumo do artigo da Wikipédia
  link: string;       // artigo completo na Wikipédia
};