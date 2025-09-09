import { useState } from "react";

export default function EjMostrarTexto() {
  const [text, setText] = useState("");

  return (
    <section className="card stack max-w-sm">
      <div className="kicker">Ejercicio 02</div>
      <h2 className="section-title">Mostrar texto</h2>

      <input
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribí algo..."
      />

      <p className="text-sm text-zinc-400">
        Salida:{" "}
        <span className="font-medium text-zinc-100">
          {text }
        </span>
      </p>
    </section>
  );
}
