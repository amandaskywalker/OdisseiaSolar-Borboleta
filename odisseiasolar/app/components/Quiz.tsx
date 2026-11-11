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
  const ultima = indice === perguntas.length - 1;

  function responder(idx: number) {
    setEscolhida(idx);
    if (idx === q.correta) setAcertos(acertos + 1);
  }

  function proxima() {
    setIndice(indice + 1);
    setEscolhida(null);
    setDicaAberta(false);
  }

  function classeOpcao(idx: number) {
    if (idx === q.correta && respondida) return `${styles.btnOpcao} ${styles.opcaoCorreta}`;
    if (idx === escolhida) return `${styles.btnOpcao} ${styles.opcaoErrada}`;
    return styles.btnOpcao;
  }

  return (
    <div className={styles.quizArea}>
      <p className={styles.titulo}>🚀 Desafio do Astronauta</p>
      <p className={styles.progresso}>
        {concluido
          ? "Desafio concluído!"
          : `Pergunta ${indice + 1} de ${perguntas.length}`}
      </p>

      {concluido ? (
        <p className={styles.resultado}>
          Você acertou {acertos} de {perguntas.length} perguntas sobre {nomeAstro}!{" "}
          {acertos === perguntas.length
            ? "Mandou muito bem, explorador! 🌟"
            : "Continue explorando o espaço! 🚀"}
        </p>
      ) : (
        <>
          <p className={styles.pergunta}>{q.pergunta}</p>
          {!respondida && !dicaAberta && (
            <button type="button" className={styles.btnDica} onClick={() => setDicaAberta(true)}>
              💡 Mostrar dica
            </button>
          )}
          {dicaAberta && <p className={styles.dica}>{q.dica}</p>}

          <div className={styles.opcoes}>
            {q.opcoes.map((opcao, idx) => (
              <button
                key={opcao}
                type="button"
                className={classeOpcao(idx)}
                disabled={respondida}
                onClick={() => responder(idx)}
              >
                {opcao}
              </button>
            ))}
          </div>

          {respondida && (
            <>
              <p className={styles.feedback}>
                {escolhida === q.correta ? (
                  <strong>✅ Acertou!</strong>
                ) : (
                  <strong>❌ Quase! A resposta certa era &quot;{q.opcoes[q.correta]}&quot;.</strong>
                )}{" "}
                {q.justificativa}
              </p>
              <button type="button" className={styles.btnProxima} onClick={proxima}>
                {ultima ? "Ver resultado" : "Próxima pergunta"}
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}
