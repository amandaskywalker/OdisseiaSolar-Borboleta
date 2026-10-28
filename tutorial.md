# Projeto Odisseia Solar

## Grupo:
Amanda Massari - 10374292 <br>
Nícolas Takehara - 10771443 <br>
Isabelle Franco  - 10425395 <br>
Paulo Zorzin Gerin - 10771431


## Ideação

<img width="1920" height="1080" alt="Flowchart Whiteboard in Grey Lilac Blue Simple and Minimal Style" src="https://github.com/user-attachments/assets/8cba7b91-069a-470b-8fd1-14d62338263f" />

O projeto Odisseia Solar possui caráter extensionista, pois busca aproximar o conhecimento científico da sociedade por meio de uma iniciativa educacional voltada à comunidade. Projetos extensionistas têm como propósito conectar o conhecimento produzido no ambiente acadêmico às necessidades sociais, promovendo a troca de conhecimentos e contribuindo para a democratização do acesso à educação. Nesse contexto, o Odisseia Solar pretende utilizar a tecnologia como instrumento de divulgação científica, tornando conteúdos de astronomia mais acessíveis e interessantes para crianças em fase inicial de aprendizagem.

O projeto foi idealizado com o objetivo de contribuir para o processo educacional de crianças brasileiras de 4 a 6 anos, tornando o aprendizado de ciências e astronomia mais acessível, dinâmico e atrativo. A proposta surgiu da necessidade de apresentar conceitos científicos de maneira adequada à faixa etária, considerando que o contato com conteúdos relacionados ao Sistema Solar pode ser limitado pela falta de recursos didáticos interativos ou pela dificuldade de manter o interesse das crianças em abordagens predominantemente expositivas.

A ideia central do projeto é transformar o estudo do Sistema Solar em uma experiência de exploração visual e descoberta. Em vez de apresentar os astros apenas por meio de textos ou imagens estáticas, a plataforma propõe uma jornada pelo espaço, na qual a criança pode conhecer o Sol, os planetas, suas luas e outras estruturas celestes de maneira progressiva e intuitiva. Dessa forma, o conteúdo educacional é associado a uma experiência lúdica, estimulando a curiosidade e incentivando o usuário a explorar os elementos apresentados.

A concepção da interface prioriza a simplicidade, a clareza visual e a facilidade de navegação, considerando as necessidades de crianças em fase inicial de alfabetização. A organização dos conteúdos busca reduzir a complexidade da interação, permitindo que os usuários identifiquem os astros e acessem suas informações sem depender de instruções extensas. Os elementos visuais desempenham um papel fundamental nessa proposta, pois ajudam a despertar o interesse, facilitar o reconhecimento dos corpos celestes e estabelecer uma relação mais concreta com os conceitos apresentados.

A experiência principal foi concebida como um percurso vertical pelo Sistema Solar, no qual os astros são apresentados sequencialmente, considerando sua posição em relação ao Sol. Ao percorrer a página, o usuário encontra representações visuais dos diferentes corpos celestes, acompanhadas de seus nomes e de informações introdutórias. Essa organização busca proporcionar uma visão geral do sistema planetário e favorecer a compreensão de que o Sistema Solar é composto por diferentes elementos, cada um com características próprias.

Além da visualização geral, a proposta contempla páginas dedicadas aos astros, nas quais são apresentadas informações mais específicas sobre suas características, composição e particularidades. Para organizar essa navegação durante a transição do site para React, prevê-se a utilização de rotas simples e rotas dinâmicas. As rotas simples serão destinadas a páginas com endereços e finalidades definidos, como a página inicial e a **nova página About**, estruturada como uma página de navegação simples para apresentar o escopo, a equipe e os propósitos do projeto. Já as rotas dinâmicas permitirão acessar informações de diferentes corpos celestes por meio de um padrão de endereço reutilizável, utilizando parâmetros para identificar o astro que deverá ser exibido. Por exemplo, uma mesma estrutura de página poderá apresentar informações sobre Marte, Júpiter ou Saturno, de acordo com a rota acessada. Essa abordagem busca facilitar a manutenção do projeto, reduzir a repetição de estruturas e permitir a inclusão de novos conteúdos de maneira organizada.

No contexto da migração para React, também se pretende utilizar recursos de gerenciamento de estado e de efeitos para ampliar a interatividade da plataforma. O hook useState permitirá controlar informações que podem mudar durante a utilização do site, como a seleção de um astro, a abertura de elementos informativos e outros estados relacionados à interação do usuário. Já o hook useEffect poderá ser utilizado para executar efeitos associados ao ciclo de vida dos componentes ou à alteração de determinadas dependências, como a obtenção de informações quando uma página de astro for acessada. Esses recursos poderão contribuir para tornar a experiência mais dinâmica, organizada e responsiva às ações do usuário, mantendo a interface sincronizada com as informações apresentadas.

Como perspectiva de evolução, o projeto também prevê estudar a utilização de uma rota de API local para centralizar o acesso aos dados astronômicos. Uma API (Application Programming Interface) permite que diferentes partes de um sistema se comuniquem por meio de regras e estruturas definidas. Nesse caso, uma rota local poderia disponibilizar informações sobre os corpos celestes para que a aplicação React as solicite e apresente na interface. Em vez de manter todos os dados diretamente associados aos elementos visuais das páginas, essa abordagem permitiria organizar as informações em uma fonte centralizada, facilitando futuras atualizações e a expansão do conteúdo. Essa possibilidade constitui uma perspectiva de desenvolvimento, cuja adoção dependerá da definição da estrutura de dados e das necessidades identificadas durante a evolução do projeto.

Outro aspecto importante da ideação é a construção de uma identidade visual que remeta ao ambiente espacial. O fundo cósmico, as estrelas, os efeitos luminosos e as representações estilizadas dos planetas contribuem para criar uma atmosfera de exploração e aventura. Características marcantes, como os anéis de Saturno, as luas naturais e o Cinturão Principal de Asteroides, recebem destaque visual para tornar a experiência mais envolvente e facilitar a identificação dos elementos estudados. Esses recursos foram concebidos para complementar o conteúdo educativo, mantendo o equilíbrio entre o apelo visual e a compreensão das informações.

A proposta também considera a responsividade como um requisito importante, de modo que a experiência possa ser utilizada em diferentes dispositivos, como computadores, tablets e celulares. Essa preocupação busca ampliar as possibilidades de acesso à plataforma, tanto em ambientes escolares quanto em situações de aprendizagem fora da sala de aula. A simplicidade da interface e a adaptação dos elementos visuais a diferentes tamanhos de tela fazem parte da concepção de uma experiência acessível e consistente.

Como recursos de apoio à navegação, a ideação prevê indicadores visuais de progresso e um mecanismo de retorno ao início da página. O indicador de progresso permitirá acompanhar o avanço ao longo do percurso, reforçando a percepção de continuidade da jornada. Já o retorno ao topo facilitará a navegação e possibilitará revisitar rapidamente o início da exploração. Além disso, a inclusão da **página About** complementa o sistema como uma página de navegação simples voltada para contextualizar o usuário sobre a iniciativa. Esses elementos complementam a experiência sem desviar a atenção do objetivo principal: conhecer o Sistema Solar.

Em relação ao conteúdo pedagógico, o Odisseia Solar busca apresentar as informações de forma gradual, utilizando textos objetivos e linguagem acessível à faixa etária. A combinação entre representações visuais, descrições breves e curiosidades científicas tem como finalidade despertar perguntas, incentivar a observação e aproximar as crianças de conceitos fundamentais da astronomia. A plataforma também poderá servir como material complementar para professores e responsáveis, oferecendo um recurso visual de apoio à introdução do tema e à realização de atividades educativas.

Assim, a ideação do Odisseia Solar fundamenta-se na integração entre educação, exploração visual, interatividade e organização dos conteúdos. Ao unir uma proposta pedagógica acessível a uma experiência digital envolvente, o projeto pretende contribuir para a divulgação científica e ampliar as possibilidades de contato das crianças com a astronomia. Seu caráter extensionista reforça esse propósito ao buscar aproximar o conhecimento científico da comunidade, utilizando a tecnologia como meio para estimular a curiosidade, favorecer a aprendizagem e democratizar o acesso a conteúdos educacionais.

## Explicação do Código

### Estrutura geral de pastas

```
odisseiasolar/
└── app/
    ├── layout.tsx              # Layout raiz (HTML, <head>, fundo estrelado)
    ├── page.tsx                # Página inicial ("/") — a jornada vertical
    ├── globals.css             # Importa todos os arquivos de CSS
    ├── css/                    # Estilos separados por responsabilidade
    ├── components/             # Componentes React reutilizáveis
    ├── data/                   # "Banco de dados" estático (TypeScript)
    └── planetas/[slug]/page.tsx  # Rota dinâmica de cada astro
```

A ideia central é: **a UI (componentes) nunca contém dados fixos sobre os planetas** — ela sempre recebe esses dados de `app/data/`. Isso é o que o projeto chama, na seção de Ideação, de preparar o terreno para uma futura API: hoje os dados estão em um arquivo TypeScript, mas poderiam vir de uma rota `/api` sem que os componentes precisassem mudar.

### 1. Tipagem dos dados — `app/data/tipos.ts`

Antes de criar os dados, definimos **o formato** que eles devem ter, usando `type` do TypeScript:

```ts
export type Astro = {
  slug: string;        // identificador usado na URL, ex: "marte"
  nome: string;        // nome de exibição, ex: "Marte"
  tituloHome: string;  // título mostrado na timeline da home
  detalheHome: string; // subtítulo (distância do Sol, luas etc.)
  classe: string;      // classe CSS que desenha o planeta
  partes: ParteVisual[]; // luas/anéis extras desenhados em cima do planeta
  descricao: string;   // texto de introdução na página do astro
  secoes: { titulo: string; itens: { termo: string; texto: string }[] }[];
};
```

O mesmo arquivo define o formato de uma pergunta de quiz:

```ts
export type Pergunta = {
  pergunta: string;
  opcoes: string[];
  correta: number;     // índice (posição) da opção certa dentro de `opcoes`
  dica: string;
  justificativa: string;
};
```


### 2. Os dados em si — `app/data/astros.ts` e `app/data/quiz.ts`

`astros.ts` exporta um array `astros: Astro[]` com um objeto para cada corpo celeste, na ordem em que aparecem na jornada (Sol → Mercúrio → ... → Netuno). Um exemplo reduzido:

```ts
export const astros: Astro[] = [
  {
    slug: "marte",
    nome: "Marte",
    tituloHome: "4. Marte",
    detalheHome: "227,9 milhões de km do Sol • 2 Luas (Fobos e Deimos)",
    classe: "marte",
    partes: [
      { classe: "lua-fobos", titulo: "Fobos" },
      { classe: "lua-deimos", titulo: "Deimos" },
    ],
    descricao: "Conhecido como o Planeta Vermelho, ...",
    secoes: [ /* ... grupos de "termo" + "texto" ... */ ],
  },
  // ... Mercúrio, Vênus, Terra, Júpiter, Saturno, Urano, Netuno
];
```


`quiz.ts` segue a mesma lógica, mas indexado pelo **nome** do astro (não pelo slug), em um `Record<string, Pergunta[]>`:

```ts
export const perguntasPorAstro: Record<string, Pergunta[]> = {
  'Sol': [
    {
      pergunta: 'Qual é a principal fonte de energia do Sol?',
      opcoes: ['Combustão de gás natural', 'Fusão nuclear no núcleo', ...],
      correta: 1,
      dica: 'Pense em como as estrelas "acendem" ...',
      justificativa: 'O Sol gera energia através da fusão nuclear ...',
    },
    // mais perguntas sobre o Sol
  ],
  'Mercúrio': [ /* ... */ ],
  // ...
};
```


### 3. Layout raiz — `app/layout.tsx`

No App Router do Next.js, `layout.tsx` envolve **todas as páginas** do site (é renderizado uma única vez, e `children` é a página atual):

```tsx
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        <Estrelas />
        {children}
      </body>
    </html>
  );
}
```


### 4. Desenhando um astro — `app/components/CorpoCeleste.tsx`

Este é o componente mais reaproveitado do projeto: ele é usado tanto na timeline da home quanto no topo da página individual de cada planeta.

```tsx
export default function CorpoCeleste({ astro, href }: Props) {
  const classe = `planeta ${astro.classe}`;
  const partes = astro.partes.map((p) => (
    <span key={p.classe} className={p.classe} title={p.titulo} />
  ));

  return href ? (
    <Link href={href} className={classe} aria-label={astro.nome}>
      {partes}
    </Link>
  ) : (
    <section className={classe}>{partes}</section>
  );
}
```


### 5. Página inicial — `app/page.tsx`

```tsx
const ANTES_DO_CINTURAO = 5;

function ItemAstro({ astro }: { astro: (typeof astros)[number] }) {
  return (
    <section className="item">
      <CorpoCeleste astro={astro} href={`/planetas/${astro.slug}`} />
      <h2>{astro.tituloHome}</h2>
      <p>{astro.detalheHome}</p>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <ProgressoRolagem />
      <header>...</header>
      <main>
        {astros.slice(0, ANTES_DO_CINTURAO).map((a) => (
          <ItemAstro key={a.slug} astro={a} />
        ))}
        <Cinturao />
        {astros.slice(ANTES_DO_CINTURAO).map((a) => (
          <ItemAstro key={a.slug} astro={a} />
        ))}
      </main>
    </>
  );
}
```

Aqui aparece o padrão mais importante da home: **em vez de escrever manualmente uma `<section>` para cada um dos 9 astros**, o código percorre o array `astros` com `.map()` e gera um `ItemAstro` para cada um. Isso significa que, para adicionar um novo planeta anão (por exemplo, Plutão), bastaria acrescentar um objeto em `astros.ts` — nenhuma linha de `page.tsx` precisaria mudar.

O array é dividido em duas partes com `.slice()` porque o Cinturão de Asteroides não é um astro como os outros (não tem página própria, não está em `astros.ts`): `ANTES_DO_CINTURAO = 5` corresponde às posições de Sol, Mercúrio, Vênus, Terra e Marte; depois dessas 5 entradas, o componente `<Cinturao />` é inserido manualmente, e só então o `.slice(5)` continua com Júpiter em diante.


### 6. Rotas dinâmicas — `app/planetas/[slug]/page.tsx`

O nome da pasta entre colchetes, `[slug]`, é a convenção do Next.js App Router para criar uma **rota dinâmica**: uma única página (`page.tsx`) atende a `/planetas/marte`, `/planetas/jupiter`, `/planetas/sol`, etc., trocando apenas o parâmetro `slug` na URL.

```tsx
const buscarAstro = (slug: string) => astros.find((a) => a.slug === slug);

export function generateStaticParams() {
  return astros.map(({ slug }) => ({ slug }));
}

export default async function PaginaAstro({ params }: PageProps<"/planetas/[slug]">) {
  const { slug } = await params;
  const astro = buscarAstro(slug);
  if (!astro) notFound();

  return (
    <section className="card-pagina">
      <CorpoCeleste astro={astro} />
      <h1>{astro.nome}</h1>
      <p>{astro.descricao}</p>

      {astro.secoes.map((secao) => (
        <Fragment key={secao.titulo}>
          <h3>{secao.titulo}</h3>
          <ul>
            {secao.itens.map((item) => (
              <li key={item.termo}>
                <strong>{item.termo}:</strong> {item.texto}
              </li>
            ))}
          </ul>
        </Fragment>
      ))}

      <Link href="/" className="voltar">← Voltar ao início</Link>
      <Quiz nomeAstro={astro.nome} />
    </section>
  );
}
```

Detalhando cada parte:
- `buscarAstro(slug)` usa `Array.find()` para localizar, dentro do array `astros`, o objeto cujo `slug` bate com o parâmetro vindo da URL (ex.: acessar `/planetas/marte` resulta em `slug === "marte"`).
- `generateStaticParams()` é uma função especial do Next.js: ela diz, em tempo de build, **quais valores de `slug` existem** (um para cada astro), para que o Next gere uma página HTML estática para cada planeta antecipadamente, em vez de montar tudo sob demanda a cada acesso. Isso deixa a navegação entre planetas instantânea.
- `if (!astro) notFound()` trata o caso de alguém acessar uma URL com um slug inexistente (ex.: `/planetas/plutao`, que ainda não existe nos dados): em vez de a página quebrar, o Next.js mostra a página de erro 404 padrão.
- `astro.secoes.map(...)` novamente evita repetição: cada astro pode ter um número diferente de seções (Marte tem uma seção extra sobre suas luas; Mercúrio não tem), e o mesmo bloco de JSX serve para todas, simplesmente percorrendo o array de seções e, dentro de cada uma, o array de itens.
- No final da página, `<Quiz nomeAstro={astro.nome} />` é renderizado passando o nome do astro — é assim que o componente de quiz sabe quais perguntas buscar em `perguntasPorAstro`.

### 7. Estado e interatividade — hooks `useState` e `useEffect`

O projeto usa dois hooks do React para tornar a página dinâmica: `useState` (guarda um valor que muda com a interação do usuário) e `useEffect` (executa código em resposta ao ciclo de vida do componente, como "quando a página montar" ou "sempre que X mudar"). Ambos só funcionam em **Client Components**, por isso esses arquivos começam com a diretiva `"use client";` no topo — ela avisa ao Next.js que aquele componente precisa rodar no navegador (e não apenas ser pré-renderizado no servidor), pois depende de interação e de APIs do navegador como `window` e `document`.

**a) Barra de progresso e botão "voltar ao topo"** — `app/components/ProgressoRolagem.tsx`:

```tsx
"use client";
import { useEffect, useState } from "react";

export default function ProgressoRolagem() {
  const [progresso, setProgresso] = useState(0);
  const [mostrarTopo, setMostrarTopo] = useState(false);

  useEffect(() => {
    const aoRolar = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgresso((window.scrollY / (total || 1)) * 100);
      setMostrarTopo(window.scrollY > 250);
    };
    window.addEventListener("scroll", aoRolar);
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <>
      <section id="progresso" style={{ width: `${progresso}%` }} />
      {mostrarTopo && (
        <button id="btn-topo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ↑ Topo
        </button>
      )}
    </>
  );
}
```

- `useState(0)` cria a variável `progresso` (porcentagem já rolada da página) e `setProgresso`, a função usada para atualizá-la. Toda vez que `setProgresso` é chamado com um valor novo, o React **re-renderiza** o componente automaticamente, atualizando a largura (`width`) da barra na tela.
- `useEffect(() => { ... }, [])` com array de dependências vazio (`[]`) roda a função **uma única vez**, logo depois que o componente aparece na tela — é o lugar correto para registrar um "ouvinte" de evento global, como `window.addEventListener("scroll", ...)`.
- A função `aoRolar` recalcula, a cada rolagem, quanto falta para chegar ao fim da página (`scrollHeight - innerHeight`) e qual a posição atual (`scrollY`), convertendo isso em uma porcentagem usada para preencher a barra de progresso. Quando a rolagem passa de 250px, o botão "↑ Topo" aparece.
- O `return () => window.removeEventListener(...)` dentro do `useEffect` é a **função de limpeza**: ela garante que, se o componente for desmontado, o ouvinte de evento seja removido, evitando vazamento de memória ou callbacks duplicados.

**b) Fundo animado com estrelas e meteoros** — `app/components/Estrelas.tsx`:

```tsx
"use client";
import { useEffect, useRef } from "react";

export default function Estrelas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    // ... cria array de estrelas e função animar() com requestAnimationFrame ...
    animar();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", redimensionar);
    };
  }, []);

  return <canvas id="espaco" ref={canvasRef} />;
}
```

Aqui, `useRef` guarda uma referência direta ao elemento `<canvas>` do DOM (sem causar re-renderizações, diferente do `useState`), permitindo desenhar nele com a API `CanvasRenderingContext2D` do navegador. Dentro do `useEffect`, uma função `animar()` é chamada recursivamente via `requestAnimationFrame` — a forma correta e eficiente de criar animações no navegador, sincronizada com a taxa de atualização da tela. A cada quadro, as estrelas têm seu brilho (`alpha`) incrementado e, ocasionalmente (`Math.random() < 0.008`), um meteoro é desenhado cruzando a tela.

**c) Quiz interativo** — `app/components/Quiz.tsx`:

```tsx
"use client";
import { useState } from "react";
import { perguntasPorAstro } from "../data/quiz";

export default function Quiz({ nomeAstro }: { nomeAstro: string }) {
  const perguntas = perguntasPorAstro[nomeAstro];
  const [indice, setIndice] = useState(0);         // pergunta atual
  const [acertos, setAcertos] = useState(0);        // placar
  const [escolhida, setEscolhida] = useState<number | null>(null); // opção clicada
  const [dicaAberta, setDicaAberta] = useState(false);

  if (!perguntas) return null;

  const concluido = indice >= perguntas.length;
  const q = perguntas[indice];
  const respondida = escolhida !== null;

  function responder(idx: number) {
    setEscolhida(idx);
    if (idx === q.correta) setAcertos(acertos + 1);
  }

  function proxima() {
    setIndice(indice + 1);
    setEscolhida(null);
    setDicaAberta(false);
  }
  // ...
}
```

Este componente mostra bem o papel do `useState` em controlar **toda a lógica de um pequeno jogo** sem precisar de nenhuma biblioteca externa de gerenciamento de estado:
- `indice` controla qual pergunta da lista está sendo exibida; `concluido = indice >= perguntas.length` é verdadeiro quando todas as perguntas já foram respondidas, momento em que a tela de resultado é exibida no lugar do quiz.
- `escolhida` guarda **qual opção o usuário clicou** (ou `null`, se ainda não respondeu). A função `classeOpcao(idx)` usa esse valor para decidir a cor de cada botão depois da resposta: verde se for a opção correta, vermelho se for a escolhida errada.
- `responder(idx)` é chamado no `onClick` de cada botão de opção; ele guarda a escolha e, se bateu com `q.correta`, incrementa o placar `acertos`.
- `proxima()` avança para a próxima pergunta e **reseta** `escolhida` e `dicaAberta`, para que a próxima pergunta comece "limpa", sem mostrar a resposta ou a dica da pergunta anterior.
- Como `if (!perguntas) return null` acontece antes de qualquer outro hook ser necessário, planetas sem perguntas cadastradas em `quiz.ts` simplesmente não exibem a seção de quiz, sem gerar erro.

### 8. Componente sem estado, só com dados fixos — `app/components/Cinturao.tsx`

```tsx
const TOTAL_ROCHAS = 35;

export default function Cinturao() {
  return (
    <section className="item item-cinturao">
      <section className="faixa-asteroides" aria-label="Cinturão de Asteroides">
        {Array.from({ length: TOTAL_ROCHAS }, (_, i) => (
          <span key={i} className={`rocha r-${i + 1}`} />
        ))}
      </section>
      <h2>Cinturão Principal de Asteroides</h2>
      <p>329 a 478 milhões de km do Sol • ...</p>
    </section>
  );
}
```

`Array.from({ length: 35 }, (_, i) => ...)` é um jeito de gerar rapidamente uma lista de 35 elementos numerados (de `r-1` a `r-35`) sem escrever 35 linhas de JSX manualmente — cada `<span className="rocha r-N" />` recebe depois, via CSS, uma posição e tamanho pseudoaleatórios diferentes, criando o efeito visual de um cinturão de asteroides disperso.

### 9. CSS organizado por responsabilidade — `app/css/` e `app/globals.css`

Em vez de um único arquivo gigante de estilos, o CSS foi dividido por assunto (`planetas.css`, `luas.css`, `cinturao-asteroides.css`, `quiz.css`, `pagina-planeta.css`, `responsivo.css`, `base.css`), e todos são reunidos em `globals.css` através de `@import`:

```css
@import "./css/base.css";
@import "./css/planetas.css";
@import "./css/luas.css";
@import "./css/cinturao-asteroides.css";
@import "./css/pagina-planeta.css";
@import "./css/quiz.css";
@import "./css/responsivo.css";
```

Essa separação segue o mesmo princípio usado no código React: cada arquivo tem uma única responsabilidade (estilos de planetas separados de estilos de luas, separados de estilos do quiz), o que facilita achar e alterar uma regra específica sem precisar vasculhar um arquivo CSS enorme.

### Resumo das decisões técnicas

| Decisão | Onde aparece | Por quê |
|---|---|---|
| Dados separados da UI | `app/data/astros.ts`, `quiz.ts` | Facilita adicionar/editar planetas e perguntas sem tocar em componentes, e prepara o terreno para uma futura API |
| Tipagem com `type` | `app/data/tipos.ts` | TypeScript aponta erros de dados incompletos antes de rodar o site |
| Rota dinâmica `[slug]` | `app/planetas/[slug]/page.tsx` | Uma página só atende a todos os planetas, evitando 9 arquivos quase idênticos |
| `generateStaticParams` | `app/planetas/[slug]/page.tsx` | Gera as páginas de cada planeta como HTML estático em tempo de build |
| `useState` | `ProgressoRolagem`, `Quiz` | Guarda valores que mudam com a interação (progresso da rolagem, pergunta atual, placar) |
| `useEffect` | `ProgressoRolagem`, `Estrelas` | Reage a eventos do navegador (`scroll`, `resize`) e a animações contínuas (`requestAnimationFrame`) |
| `.map()` sobre arrays de dados | `page.tsx`, `CorpoCeleste`, página do astro | Evita repetir JSX manualmente para cada planeta, lua ou seção de conteúdo |
| CSS modular | `app/css/*.css` | Cada arquivo cuida de um único aspecto visual, facilitando manutenção |
