const TOTAL_ROCHAS = 35;

export default function Cinturao() {
  return (
    <section className="item item-cinturao">
      <section className="faixa-asteroides" aria-label="Cinturão de Asteroides">
        <span className="faixa-nevoa-orbital" />
        <span className="faixa-linha-guia" />
        <span className="enxame-constelacao-1" />
        <span className="enxame-constelacao-2" />
        <span className="enxame-constelacao-3" />
        {Array.from({ length: TOTAL_ROCHAS }, (_, i) => (
          <span key={i} className={`rocha r-${i + 1}`} />
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
