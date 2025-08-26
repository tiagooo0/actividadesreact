import { useState } from "react";

export default function EjContador() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Ej 01 – Contador</h2>
      <p>Valor: {count}</p>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
