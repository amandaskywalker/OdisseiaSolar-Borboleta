import Link from "next/link";
import { Astro } from "../data/tipos";
import styles from "./CorpoCeleste.module.css";

interface Props {
  astro: Astro;
  href?: string;
}

export default function CorpoCeleste({ astro, href }: Props) {
  const classePlaneta = `${styles.planeta} ${styles[astro.classe] || ""}`;

  const partes = astro.partes.map((p) => (
    <span
      key={p.classe}
      className={`${styles.parte} ${styles[p.classe] || ""}`}
      title={p.titulo}
    />
  ));

  return href ? (
    <Link href={href} className={classePlaneta} aria-label={astro.nome}>
      {partes}
    </Link>
  ) : (
    <section className={classePlaneta}>{partes}</section>
  );
}
