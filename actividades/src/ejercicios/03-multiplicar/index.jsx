import { useState } from "react";

export default function EjMultiplicar() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  return (
    <div>
      <h2>Ej 03 – Multiplicar</h2>
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
      <p>Resultado: {a * b}</p>
    </div>
  );
}
