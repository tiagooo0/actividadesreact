function Saludo({ nombre }) {
  return <p className="text-zinc-200"> hola {nombre}</p>;
}

export default function Ejercicio08() {
  return (
    <div className="card stack max-w-sm">
      <h2 className="section-title">Ej 08 – Saludos con props</h2>

      <Saludo nombre="luos" />
      <Saludo nombre="mario" />
      <Saludo nombre="cami prima de juli" />
    </div>
  );
}
