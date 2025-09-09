import { useState } from "react";

export default function Ejercicio05() {
  const [mensaje, setMensaje] = useState("");

  function manejarEnvio(evento) {
    evento.preventDefault();
    alert(mensaje);
  }

  return (
    <div className="card stack max-w-sm">
      <h2 className="section-title">Ej 05 – Formulario con alerta</h2>

      <form onSubmit={manejarEnvio} className="stack">
        <input
          className="input"
          type="text"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          
        />
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}
