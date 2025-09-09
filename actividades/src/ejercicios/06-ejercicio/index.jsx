export default function Ejercicio06() {
  const personas = ["luca", "a", "jli", "santix", "siam"];

  return (
    <div className="card stack max-w-sm">
      <h2 className="section-title">Ej 06 – Lista de personas</h2>

      <ul className="stack">
        {personas.map((nombre, i) => (
          <li key={i} className="text-zinc-200">
            {nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}
