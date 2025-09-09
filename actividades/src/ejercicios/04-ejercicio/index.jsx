import { useState } from "react";

export default function Ejercicio04() {
  const [color, setColor] = useState();

  return (
    <div
      className={`card stack max-w-sm transition-colors`}
      style={{ backgroundColor: color }}
    >
      <h2 className="section-title">Ej 04 – Cambiar color de fondo</h2>

      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="input"
      >
        <option value="black">Negro</option>
        <option value="white">Blanco</option>
        <option value="red">Rojo</option>
        <option value="green">Verde</option>
        <option value="blue">Azul</option>
        <option value="purple">Violeta</option>
      </select>

      <p className="text-sm text-zinc-400">
        Fondo actual: <span className="text-zinc-100">{color}</span>
      </p>
    </div>
  );
}
