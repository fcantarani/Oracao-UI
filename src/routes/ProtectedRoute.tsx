import { ReactNode } from "react";

interface protectedRouteProps {
    children : ReactNode;
}

export default function ProtectedRoute({ children }: protectedRouteProps) {
    const auth = localStorage.getItem("authenticated");
    return (
        (!auth) ? <h1>Error</h1> : children 
    );

}