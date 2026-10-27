import type { Metadata } from "next";
import Estrelas from "./components/Estrelas";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sistema Solar",
  description:
    "Site educativo e interativo sobre o Sistema Solar para crianças de 4 a 6 anos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        <Estrelas />
        {children}
      </body>
    </html>
  );
}
