# Odisseia Solar

Site educativo em Next.js (App Router) que apresenta o Sistema Solar para crianças de 4 a 6 anos, em uma jornada vertical pelo Sol, pelos planetas e pelo Cinturão de Asteroides. Cada astro tem uma página própria com informações e um quiz.

A ideação e a explicação detalhada do código estão em [`tutorial.md`](../tutorial.md).

## Grupo

- Amanda Massari - 10374292
- Nícolas Takehara - 10771443
- Isabelle Franco - 10425395
- Paulo Zorzin Gerin - 10771431

## Como executar

Pré-requisito: Node.js instalado.

```bash
cd odisseiasolar
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

Outros comandos:

```bash
npm run build   # gera a versão de produção
npm run start   # serve a versão de produção
npm run lint    # verifica o código com o ESLint
```

## Conteúdo da Parte 3

### Componentização

Os componentes reutilizáveis ficam em `app/components/`:

| Componente | Responsabilidade |
|---|---|
| `CorpoCeleste` | Desenha um astro; vira link quando recebe `href` |
| `Cinturao` | Desenha o Cinturão Principal de Asteroides |
| `ProgressoRolagem` | Barra de progresso e botão "↑ Topo" |
| `Estrelas` | Fundo animado com estrelas e meteoros |
| `Quiz` | Quiz interativo na página de cada astro |

### Rotas

| Rota | Tipo | Arquivo |
|---|---|---|
| `/` | Simples | `app/page.tsx` |
| `/planetas/[slug]` (ex.: `/planetas/marte`) | Dinâmica | `app/planetas/[slug]/page.tsx` |

A rota dinâmica usa `generateStaticParams` para gerar uma página estática por astro e `notFound()` para slugs inexistentes.

## Estrutura de pastas

```
odisseiasolar/
└── app/
    ├── layout.tsx                 # Layout raiz
    ├── page.tsx                   # Rota "/"
    ├── planetas/[slug]/page.tsx   # Rota dinâmica de cada astro
    ├── components/                # Componentes reutilizáveis
    ├── data/                      # Tipos e dados dos astros e do quiz
    ├── css/                       # Estilos separados por responsabilidade
    └── globals.css                # Importa todos os arquivos de CSS
```

## Tecnologias

Next.js 16, React 19, TypeScript e Tailwind CSS 4.