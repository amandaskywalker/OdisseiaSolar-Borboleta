"use client";
import { useState } from "react";
import { perguntasPorAstro } from "../data/quiz";
import styles from "./Quiz.module.css";

export default function Quiz({ nomeAstro }: { nomeAstro: string }) {
  const perguntas = perguntasPorAstro[nomeAstro];
  const [indice, setIndice] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [escolhida, setEscolhida] = useState<number | null>(null);
  const [dicaAberta, setDicaAberta] = useState(false);

  if (!perguntas) return null;

  const concluido = indice >= perguntas.length;
  const q = perguntas[indice];
  const respondida = escolhida !== null;

  function responder(idx: number) {
    if (respondida) return;
    setEscolhida(idx);
    if (idx === q.correta) setAcertos(acertos + 1);
  }

  function proxima() {
    setIndice(indice + 1);
    setEscolhida(null);
    setDicaAberta(false);
  }

  return (
    <div className={styles.containerQuiz}>
      <h3 className={styles.titulo}>Desafio Espacial: {nomeAstro}</h3>

      {concluido ? (
        <div className={styles.resultado}>
          <h4>Parabéns, Explorador!</h4>
          <p>Você acertou {acertos} de {perguntas.length} perguntas!</p>
          <button className={styles.btnAcao} onClick={() => { setIndice(0); setAcertos(0); setEscolhida(null); }}>
            Tentar Novamente
          </button>
        </div>
      ) : (
        <div className={styles.perguntaCard}>
          <p className={styles.enunciado}>{q.pergunta}</p>
          <div className={styles.opcoesGrid}>
            {q.opcoes.map((opcao, idx) => {
              let classeBotao = styles.btnOpcao;
              if (respondida) {
                if (idx === q.correta) classeBotao += ` ${styles.correta}`;
                else if (idx === escolhida) classeBotao += ` ${styles.errada}`;
              }
              return (
                <button
                  key={idx}
                  className={classeBotao}
                  onClick={() => responder(idx)}
                  disabled={respondida}
                >
                  {opcao}
                </button>
              );
            })}
          </div>

          {respondida && (
            <div className={styles.feedback}>
              <p>{q.justificativa}</p>
              <button className={styles.btnAcao} onClick={proxima}>
                Próxima Pergunta →
              </button>
            </div>
          )}

          {!respondida && q.dica && (
            <div className={styles.secaoDica}>
              <button className={styles.btnDica} onClick={() => setDicaAberta(!dicaAberta)}>
                {dicaAberta ? "Esconder Dica" : "💡 Ver Dica"}
              </button>
              {dicaAberta && <p className={styles.textoDica}>{q.dica}</p>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
