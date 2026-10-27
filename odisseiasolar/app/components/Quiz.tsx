"use client";

import { useState } from "react";
import { perguntasPorAstro } from "../data/quiz";

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
    if (idx === q.correta && respondida) return "quiz-btn-opcao quiz-opcao-correta";
    if (idx === escolhida) return "quiz-btn-opcao quiz-opcao-errada";
    return "quiz-btn-opcao";
  }

  return (
    <div className="quiz-area">
      <p className="quiz-titulo">🚀 Desafio do Astronauta</p>
      <p className="quiz-progresso">
        {concluido
          ? "Desafio concluído!"
          : `Pergunta ${indice + 1} de ${perguntas.length}`}
      </p>

      {concluido ? (
        <p className="quiz-resultado">
          Você acertou {acertos} de {perguntas.length} perguntas sobre {nomeAstro}!{" "}
          {acertos === perguntas.length
            ? "Mandou muito bem, explorador! 🌟"
            : "Continue explorando o espaço! 🚀"}
        </p>
      ) : (
        <>
          <p className="quiz-pergunta">{q.pergunta}</p>
          {!respondida && !dicaAberta && (
            <button type="button" className="quiz-btn-dica" onClick={() => setDicaAberta(true)}>
              💡 Mostrar dica
            </button>
          )}
          {dicaAberta && <p className="quiz-dica">{q.dica}</p>}

          <div className="quiz-opcoes">
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
              <p className="quiz-feedback">
                {escolhida === q.correta ? (
                  <strong>✅ Acertou!</strong>
                ) : (
                  <strong>❌ Quase! A resposta certa era &quot;{q.opcoes[q.correta]}&quot;.</strong>
                )}{" "}
                {q.justificativa}
              </p>
              <button type="button" className="quiz-btn-proxima" onClick={proxima}>
                {ultima ? "Ver resultado" : "Próxima pergunta"}
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}
