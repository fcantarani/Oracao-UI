import { useAuth } from "@/hooks/use-auth";

interface IProtectedPage {
    children?: React.ReactElement
}

export default function ProtectedPage({ children }: IProtectedPage) {
    const currentUser = useAuth();

    if (!currentUser) {
        return (
            <h1>
                You don't have access!
            </h1>
        )
    }
    else {
        return (
            { children }
        );
    }
}