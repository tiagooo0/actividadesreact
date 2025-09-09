import { useState } from "react";

function Tarea({ tarea, cambiar, borrar }) {
  return (
    <li className="row">
      <span className={tarea.completada ? "line-through text-zinc-500" : "text-zinc-100"}>
        {tarea.titulo}
      </span>
      <button className="btn" onClick={() => cambiar(tarea.id)}>
        {tarea.completada ? "Desmarcar" : "Completar"}
      </button>
      <button className="btn btn-ghost" onClick={() => borrar(tarea.id)}>
        Borrar
      </button>
    </li>
  );
}

export default function TareasPage() {
  const [titulo, setTitulo] = useState("");
  const [tareas, setTareas] = useState([]);

  function agregar() {
    const nombre = titulo.trim();
    if (!nombre) return;
    const nueva = { id: Date.now(), titulo: nombre, completada: false };
    setTareas([...tareas, nueva]);
    setTitulo("");
  }

  function cambiar(id) {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  }

  function borrar(id) {
    setTareas(tareas.filter((t) => t.id !== id));
  }

  const conteo = tareas.reduce(
    (acc, t) => ({
      total: acc.total + 1,
      hechas: acc.hechas + (t.completada ? 1 : 0),
    }),
    { total: 0, hechas: 0 }
  );

  const pendientes = tareas.filter((t) => !t.completada);
  const completas = tareas.filter((t) => t.completada);

  return (
    <section className="card stack">
      <h2 className="section-title">Tareas</h2>

      <div className="row">
        <input
          className="input"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <button className="btn btn-primary" onClick={agregar}>
          Agregar
        </button>
      </div>

      <p className="text-zinc-400">
        Total: <span className="text-zinc-100">{conteo.total}</span> · Hechas:{" "}
        <span className="text-zinc-100">{conteo.hechas}</span>
      </p>

      <div className="stack">
        <div className="card card-muted">
          <h3 className="text-zinc-100 font-semibold">Pendientes</h3>
          <ul className="stack">
            {pendientes.map((t) => (
              <Tarea key={t.id} tarea={t} cambiar={cambiar} borrar={borrar} />
            ))}
          </ul>
        </div>

        <div className="card card-muted">
          <h3 className="text-zinc-100 font-semibold">Completadas</h3>
          <ul className="stack">
            {completas.map((t) => (
              <Tarea key={t.id} tarea={t} cambiar={cambiar} borrar={borrar} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
