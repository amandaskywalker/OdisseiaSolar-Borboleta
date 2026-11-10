"use client";
import { useEffect, useState } from "react";
import styles from "./ProgressoRolagem.module.css";

export default function ProgressoRolagem() {
  const [progresso, setProgresso] = useState(0);
  const [mostrarTopo, setMostrarTopo] = useState(false);

  useEffect(() => {
    const aoRolar = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgresso((window.scrollY / (total || 1)) * 100);
      setMostrarTopo(window.scrollY > 250);
    };
    window.addEventListener("scroll", aoRolar);
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <>
      <div className={styles.barraProgresso} style={{ width: `${progresso}%` }} />
      {mostrarTopo && (
        <button
          className={styles.btnTopo}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Topo
        </button>
      )}
    </>
  );
}
