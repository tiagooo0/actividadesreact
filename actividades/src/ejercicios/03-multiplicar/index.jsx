import { useState } from "react";

export default function EjMultiplicar() {
  const [a, setA] = useState();
  return (
    <div className="card stack max-w-sm">
      <h2 className="section-title">Ej 03 – Multiplicar</h2>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        className="input w-28"
      />
      <p className="text-sm text-zinc-400">
        Resultado: <span className="text-lg font-semibold text-zinc-100">{a * 2}</span>
      </p>
    </div>
  );
}
