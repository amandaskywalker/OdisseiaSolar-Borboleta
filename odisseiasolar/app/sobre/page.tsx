import type { Metadata } from "next";
import Link from "next/link";
import styles from "../components/CardPagina.module.css";

export const metadata: Metadata = {
  title: "Sobre",
};

export default function Sobre() {
  return (
    <section className={styles.cardPagina}>
      <h1>Sobre o Odisseia Solar</h1>
      <p>
        O Odisseia Solar é um projeto de caráter extensionista que busca
        aproximar o conhecimento científico da sociedade por meio de uma
        iniciativa educacional voltada à comunidade. A proposta utiliza a
        tecnologia como instrumento de divulgação científica, tornando
        conteúdos de astronomia mais acessíveis e interessantes para crianças
        em fase inicial de aprendizagem.
      </p>
      <p>
        O projeto foi idealizado com o objetivo de contribuir para o processo
        educacional de crianças brasileiras de 4 a 6 anos, tornando o
        aprendizado de ciências e astronomia mais acessível, dinâmico e
        atrativo. Em vez de apresentar os astros apenas por meio de textos ou
        imagens estáticas, a plataforma propõe uma jornada pelo espaço, na
        qual a criança pode conhecer o Sol, os planetas, suas luas e outras
        estruturas celestes de maneira progressiva e intuitiva.
      </p>

      <h3>Equipe</h3>
      <ul>
        <li>Amanda Massari — 10374292</li>
        <li>Nícolas Takehara — 10771443</li>
        <li>Isabelle Franco — 10425395</li>
        <li>Paulo Zorzin Gerin — 10771431</li>
      </ul>

      <Link href="/" className={styles.voltar}>
        ← Voltar ao início
      </Link>
    </section>
  );
}
