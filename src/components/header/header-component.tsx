import { Link } from "react-router-dom";
import { ModeToggle } from "../dark-mode/mode-toggle";
import { ProfileComponent } from "../profile/profile-component";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "../ui/navigation-menu";

export function HeaderComponent() {
  return (
    <div className="border-b bg-slate-100 dark:bg-slate-800">
      <div className="flex mx-auto p-4 justify-between max-w-7xl">
        <div className="flex items-center gap-5">
          <Link to="/home">Home</Link>
          <Link to="/pedidos">Meus Pedidos</Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Administração</NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="flex flex-col gap-3 p-4 w-[200px]">
                    <Link to="admin/users">Usuários</Link>
                    <Link to="admin/category">Categorias</Link>
                  </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>


      </div>

      <div className="flex justify-end gap-3 w-96">
        <ModeToggle />
        <ProfileComponent />
      </div>
    </div >
    </div >
  );
}
