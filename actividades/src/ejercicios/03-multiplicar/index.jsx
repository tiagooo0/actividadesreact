import { useState } from "react";

export default function EjMultiplicar() {
  const [a, setA] = useState();
  return (
    <div>
      <h2>Ej 03 – Multiplicar</h2>
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      <p>Resultado: {a * 2}</p>
    </div>
  );
}
