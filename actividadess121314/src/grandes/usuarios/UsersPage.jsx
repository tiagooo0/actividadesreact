import { useEffect, useState } from "react";

export default function UsersPage() {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelado = false;

    async function cargar() {
      try {
        setCargando(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("HTTP " + res.status);
        const json = await res.json();
        if (!cancelado) setDatos(json);
      } catch (e) {
        if (!cancelado) setError(e.message);
      } finally {
        if (!cancelado) setCargando(false);
      }
    }
    cargar();
    return () => { cancelado = true; };
  }, []);

  if (cargando) return <p className="text-zinc-400">Cargando</p>;
  if (error) return <p className="text-zinc-400">error : <span className="text-zinc-100">{error}</span></p>;

  return (
    <section className="stack">
      <h2 className="section-title">Usuarios api</h2>
      <ul className="stack">
        {datos.map(u => (
          <li key={u.id} className="card">
            <strong className="text-zinc-100">{u.name}</strong>
            <span className="text-zinc-400">{u.email}</span>
            <span className="text-zinc-400">{u.company?.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
