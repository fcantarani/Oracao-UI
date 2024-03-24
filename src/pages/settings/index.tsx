import { Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <main className="my-4">
      <h1>Administração</h1>
      <Outlet/>
    </main>
  );
}
