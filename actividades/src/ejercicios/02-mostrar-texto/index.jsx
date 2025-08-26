import { useState } from "react";

export default function EjMostrarTexto() {
  const [text, setText] = useState("");
  return (
    <div>
      <h2>Ej 02 – Mostrar texto</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Salida: {text}</p>
    </div>
  );
}
