import Link from "next/link";
import type { Astro } from "../data/tipos";

type Props = { astro: Astro; href?: string };

// Desenho do astro em CSS. Com `href` vira link (home); sem, é só a ilustração (página do astro).
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
