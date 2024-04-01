import { Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <main className="my-4 w-full">
      <h1 className="font-bold text-[2rem]">Administração</h1>
      <div className="my-4">
        <Outlet />
      </div>
    </main>
  );
}
