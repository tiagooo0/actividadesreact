import { useState } from "react";

export default function Ejercicio11() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  return (
    <div className="card stack max-w-sm">
      <h2 className="section-title">Ej 11 – Formulario </h2>

      <input
        className="input"
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        className="input"
                type="text"

        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />

      <p className="text-zinc-400">nombre <span className="text-zinc-100">{nombre}</span></p>
      <p className="text-zinc-400">mail <span className="text-zinc-100">{correo}</span></p>
    </div>
  );
}
