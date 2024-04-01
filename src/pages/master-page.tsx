import { HeaderComponent } from "@/components/header/header-component";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function MasterPage() {

  const auth = localStorage.getItem("authenticated");

  return (
    <Suspense fallback={<p>Aguarde...</p>}>
      <main>
        {auth?.length && (<HeaderComponent />)}
        <div className="flex mx-auto justify-between max-w-7xl">
          <Outlet />
        </div>
      </main>
    </Suspense>
  );
}
