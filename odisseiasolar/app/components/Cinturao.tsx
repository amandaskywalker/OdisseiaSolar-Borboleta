import styles from "./Cinturao.module.css";

const TOTAL_ROCHAS = 35;

export default function Cinturao() {
  return (
    <section className={styles.itemCinturao}>
      <div className={styles.faixaAsteroides} aria-label="Cinturão de Asteroides">
        {Array.from({ length: TOTAL_ROCHAS }, (_, i) => (
          <span key={i} className={styles.rocha} />
        ))}
      </div>
      <h2 className={styles.titulo}>Cinturão Principal de Asteroides</h2>
      <p className={styles.subtitulo}>329 a 478 milhões de km do Sol</p>
    </section>
  );
}
