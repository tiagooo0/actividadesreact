import { useState } from "react";

function Item({ data, cambiar, borrar, esComprado }) {
  return (
    <li className="row">
      <span className={esComprado ? "line-through text-zinc-500" : "text-zinc-100"}>
        {data.nombre} — ${data.precio.toFixed(2)} · {data.categoria}
      </span>
      {!esComprado && (
        <button className="btn" onClick={() => cambiar(data.id)}>
          Comprar
        </button>
      )}
      <button className="btn btn-ghost" onClick={() => borrar(data.id)}>
        Borrar
      </button>
    </li>
  );
}

export default function SuperPage() {
  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    categoria: "General",
  });

  const [items, setItems] = useState([]);
  const categorias = ["general", "lácteos", "frutas", "bebidas", "limpieza"];

  function onCambio(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function agregar(e) {
    e.preventDefault();
    const nombre = form.nombre.trim();
    const precioNum = parseFloat(form.precio);
    if (!nombre || isNaN(precioNum)) return;

    const nuevo = {
      id: Date.now(),
      nombre,
      precio: precioNum,
      categoria: form.categoria,
      comprado: false,
    };

    setItems([...items, nuevo]);
    setForm({ nombre: "", precio: "", categoria: "General" });
  }

  function cambiar(id) {
    setItems(items.map((i) => (i.id === id ? { ...i, comprado: !i.comprado } : i)));
  }

  function borrar(id) {
    setItems(items.filter((i) => i.id !== id));
  }

  const pendientes = items.filter((i) => !i.comprado);
  const comprados = items.filter((i) => i.comprado);

  return (
    <section className="card stack">
      <h2 className="section-title">Lista</h2>

      <form onSubmit={agregar} className="stack">
        <input
          className="input"
          name="nombre"
          value={form.nombre}
          onChange={onCambio}
        />
        <input
          className="input"
          name="precio"
          type="text"
          step="0.01"
          value={form.precio}
          onChange={onCambio}
        />
        <select
          className="input"
          name="categoria"
          value={form.categoria}
          onChange={onCambio}
        >
          {categorias.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </form>

      <div className="divider" />

      <div className="stack">
        <div className="card card-muted">
          <h3 className="text-zinc-100 font-semibold">Pendientes</h3>
          <ul className="stack">
            {pendientes.map((i) => (
              <Item key={i.id} data={i} cambiar={cambiar} borrar={borrar} esComprado={false} />
            ))}
          </ul>
        </div>

        <div className="card card-muted">
          <h3 className="text-zinc-100 font-semibold">Comprados</h3>
          <ul className="stack">
            {comprados.map((i) => (
              <Item key={i.id} data={i} cambiar={cambiar} borrar={borrar} esComprado />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
