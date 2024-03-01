import { HeaderComponent } from "@/components/header/header-component";
import { Outlet } from "react-router-dom";

export default function MasterPager() {
  return (
    <div>
      <HeaderComponent />
      <div className="flex mx-auto p-4 justify-between max-w-7xl">
        <Outlet />
      </div>
    </div>
  );
}
