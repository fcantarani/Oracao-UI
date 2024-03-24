import { Link } from "react-router-dom";
import { ModeToggle } from "../dark-mode/mode-toggle";
import { ProfileComponent } from "../profile/profile-component";

export function HeaderComponent() {
  return (
    <div className="border-b bg-slate-100 dark:bg-slate-800">
      <div className="flex mx-auto p-4 justify-between max-w-7xl">
        <div className="flex items-center gap-5">
          <Link to="/home">Home</Link>
          <Link to="/pedidos">Meus Pedidos</Link>
          <Link to="/admin">Administração</Link>
          <Link to="/login">Login</Link>
        </div>

        <div className="flex justify-end gap-3 w-96">
          <ModeToggle />
          <ProfileComponent />
        </div>
      </div>
    </div>
  );
}
