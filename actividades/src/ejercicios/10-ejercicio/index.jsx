import { useState } from "react";

export default function Ejercicio10() {
  const [precios] = useState([100, 0, 2200, 400]);

  const total = precios.reduce((suma, num) => suma + num, 0);

  return (
    <div className="card stack max-w-sm">
      <h2 className="section-title">Ej 10 – Total con reduce</h2>

      <ul className="stack">
        {precios.map((p, i) => (
          <li key={i} className="text-zinc-200">
            ${p}
          </li>
        ))}
      </ul>

      <p className="text-zinc-100 font-semibold">Total: ${total}</p>
    </div>
  );
}
