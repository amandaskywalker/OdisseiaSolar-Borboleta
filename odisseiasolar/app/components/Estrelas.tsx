"use client";

import { useEffect, useRef } from "react";

type Meteoro = { x: number; y: number; len: number; speed: number; life: number };

export default function Estrelas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const redimensionar = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", redimensionar);

    const estrelas = Array.from({ length: 100 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.4, // raio
      alpha: Math.random(), // transparência inicial
      vel: Math.random() * 0.02 + 0.005, // velocidade do brilho
    }));

    let meteoro: Meteoro | null = null;
    let frame = 0;

    function animar() {
      ctx.clearRect(0, 0, w, h); // limpa o quadro para as estrelas não deixarem rastro

      for (const e of estrelas) {
        e.alpha += e.vel;
        if (e.alpha > 1 || e.alpha < 0.1) e.vel = -e.vel; // inverte o brilho nos extremos
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(e.alpha)})`;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!meteoro && Math.random() < 0.008) {
        meteoro = {
          x: Math.random() * w,
          y: Math.random() * (h / 2), // só na metade superior da tela
          len: Math.random() * 50 + 35,
          speed: Math.random() * 6 + 6,
          life: 1,
        };
      }

      if (meteoro) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${meteoro.life})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(meteoro.x, meteoro.y);
        ctx.lineTo(meteoro.x - meteoro.len, meteoro.y + meteoro.len * 0.5); // cauda inclinada
        ctx.stroke();

        meteoro.x += meteoro.speed;
        meteoro.y += meteoro.speed * 0.5;
        meteoro.life -= 0.025;
        if (meteoro.life <= 0) meteoro = null;
      }

      frame = requestAnimationFrame(animar);
    }

    animar();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", redimensionar);
    };
  }, []);

  return <canvas id="espaco" ref={canvasRef} />;
}
