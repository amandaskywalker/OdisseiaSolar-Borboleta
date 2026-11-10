import Cinturao from "./components/Cinturao";
import CorpoCeleste from "./components/CorpoCeleste";
import ProgressoRolagem from "./components/ProgressoRolagem";
import { astros } from "./data/astros";
import styles from "./page.module.css";

// O cinturão fica entre Marte (5º item) e Júpiter.
const ANTES_DO_CINTURAO = 5;

function ItemAstro({ astro }: { astro: (typeof astros)[number] }) {
  return (
    <section className={styles.itemAstro}>
      <CorpoCeleste astro={astro} href={`/planetas/${astro.slug}`} />
      <h2>{astro.tituloHome}</h2>
      <p>{astro.detalheHome}</p>
    </section>
  );
}

export default function Home() {
  return (
    <div className={styles.containerHome}>
      <ProgressoRolagem />
      <header>
        <h1>Sistema Solar</h1>
        <p>Role a página para baixo para ver o Sol e os planetas em ordem.</p>
      </header>

      <main className={styles.jornadaMain}>
        {astros.slice(0, ANTES_DO_CINTURAO).map((a) => (
          <ItemAstro key={a.slug} astro={a} />
        ))}
        <Cinturao />
        {astros.slice(ANTES_DO_CINTURAO).map((a) => (
          <ItemAstro key={a.slug} astro={a} />
        ))}
      </main>
    </div>
  );
}
