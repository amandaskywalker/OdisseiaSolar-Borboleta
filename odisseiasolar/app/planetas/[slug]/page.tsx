import type { Metadata } from "next";
import { Fragment, Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import CorpoCeleste from "../../components/CorpoCeleste";
import Quiz from "../../components/Quiz";
import styles from "../../components/CardPagina.module.css";
import { astros } from "../../data/astros";
import type { Astro } from "../../data/tipos";

const buscarAstro = (slug: string): Astro | undefined =>
  astros.find((a) => a.slug === slug);

export function generateStaticParams() {
  return astros.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/planetas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: buscarAstro(slug)?.nome };
}

// O `await params` fica dentro do <Suspense> (exigência do cacheComponents + partialPrefetching).
export default function PaginaAstro({ params }: PageProps<"/planetas/[slug]">) {
  return (
    <Suspense>
      <ConteudoAstro params={params} />
    </Suspense>
  );
}

async function ConteudoAstro({ params }: Pick<PageProps<"/planetas/[slug]">, "params">) {
  const { slug } = await params;
  const astro = buscarAstro(slug);
  if (!astro) notFound();

  return (
    <section className={styles.cardPagina}>
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

      <Link href="/" className={styles.voltar}>
        ← Voltar ao início
      </Link>
      <Quiz nomeAstro={astro.nome} />
    </section>
  );
}
