"use client";
import { useEffect, useState } from "react";
import type { Curiosidade } from "../data/tipos";
import styles from "./CuriosidadeDoDia.module.css";

export default function CuriosidadeDoDia() {
  const [curiosidade, setCuriosidade] = useState<Curiosidade | null>(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    fetch("/api/curiosidade")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setCuriosidade)
      .catch(() => setErro(true));
  }, []);

  return (
    <section className={styles.caixa}>
      <h2>🔭 Curiosidade do dia</h2>
      {erro ? (
        <p className={styles.carregando}>
          Não conseguimos buscar a curiosidade agora. Tente recarregar a página daqui a pouco.
        </p>
      ) : !curiosidade ? (
        <p className={styles.carregando}>Procurando no espaço...</p>
      ) : (
        <>
          <h3>{curiosidade.titulo}</h3>
          <p className={styles.texto}>{curiosidade.explicacao}</p>
          <p className={styles.fonte}>
            {curiosidade.data.split("-").reverse().join("/")} •{" "}
            {curiosidade.creditos && `© ${curiosidade.creditos} • `}
            <a href={curiosidade.link} target="_blank" rel="noreferrer">
              Foto Astronômica do Dia — NASA
            </a>{" "}
            • tradução automática
          </p>
        </>
      )}
    </section>
  );
}