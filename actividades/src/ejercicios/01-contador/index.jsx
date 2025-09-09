import { useState } from "react";

export default function EjContador() {
  const [count, setCount] = useState(0);

  return (
    <section className="card stack max-w-sm">
      <h2 className="section-title">Ej 01 – Contador</h2>

      <p className="text-sm text-zinc-400">
        Valor actual:{" "}
        <span className="font-semibold text-zinc-100">{count}</span>
      </p>

      <button
        onClick={() => setCount(count + 1)}
        className="btn btn-primary w-full"
      >
        +1
      </button>
    </section>
  );
}
