import TareasPage from "./grandes/tareas/TareasPage.jsx";
import SuperPage from "./grandes/supermercado/SuperPage.jsx";
import UsersPage from "./grandes/usuarios/UsersPage.jsx";

export default function App() {
  return (
    <div className="app-container">
      <h1 className="text-3xl font-bold text-zinc-100">Actividades Grandes (12–13–14)</h1>
      <div className="card">
        <TareasPage />
      </div>
      <div className="card">
        <SuperPage />
      </div>
      <div className="card">
        <UsersPage />
      </div>
    </div>
  );
}
