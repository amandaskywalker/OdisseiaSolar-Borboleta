import styles from "./Cinturao.module.css";

const TOTAL_ROCHAS = 35;

export default function Cinturao() {
  return (
    <section className={styles.itemCinturao}>
      <section className={styles.faixaAsteroides} aria-label="Cinturão de Asteroides">
        <span className={styles["faixa-nevoa-orbital"]} />
        <span className={styles["faixa-linha-guia"]} />
        <span className={styles["enxame-constelacao-1"]} />
        <span className={styles["enxame-constelacao-2"]} />
        <span className={styles["enxame-constelacao-3"]} />
        {Array.from({ length: TOTAL_ROCHAS }, (_, i) => (
          <span key={i} className={`${styles.rocha} ${styles[`r-${i + 1}`]}`} />
        ))}
      </section>
      <h2>Cinturão Principal de Asteroides</h2>
      <p>
        329 a 478 milhões de km do Sol • Faixa de detritos rochosos e
        planetesimais entre as órbitas de Marte e Júpiter
      </p>
    </section>
  );
}
