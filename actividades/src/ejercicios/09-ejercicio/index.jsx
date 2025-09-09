import { useState } from "react";

export default function Ejercicio09() {
  const frutas = ["manzana", "banana"];
  const [texto, setTexto] = useState("");

  return (
    <div className="card stack max-w-sm">
      <h2 className="section-title">Ej 09 – Filtro de frutas</h2>

      <input
        className="input"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <ul className="stack">
        {frutas
          .filter((f) => f.includes(texto))
          .map((f, i) => (
            <li key={i} className="text-zinc-200">
              {f}
            </li>
          ))}
      </ul>
    </div>
  );
}
