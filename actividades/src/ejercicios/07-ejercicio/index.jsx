export default function Ejercicio07() {
  const productos = [
    { item: "Lápiz", precio: 100 },
    { item: "Cuaderno", precio: 100 },
    { item: "Mochila", precio: 20 },
    { item: "Regla", precio: 2000000 },
  ];

  return (
    <div className="card stack max-w-sm">
      <h2 className="section-title">Ej 07 – Lista de productos</h2>

      <ul className="stack">
        {productos.map((producto, indice) => (
          <li key={indice} className="text-zinc-200">
            {producto.item} — ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}
