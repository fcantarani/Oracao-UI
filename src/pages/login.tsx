import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator"

export default function Login() {
    return (
        <div className="flex h-screen mx-auto items-center bg-gray-100">
            <div className="flex flex-col md:w-3/12 w-11/12 md:h-3/6 h-4/6 p-4 mx-auto border rounded-lg shadow-xl gap-4 bg-white">
                <div className="flex justify-center">
                    <h1>Digite seu e-mail e senha para entrar.</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Meu e-mail" />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input type="password" id="password" placeholder="******" />
                </div>
                <div className="w-full">
                    <Button className="w-full font-bold">Entrar</Button>
                </div>

                <Separator />

                <div className="">
                    <Button className="w-full font-semibold" variant={"secondary"}>Cadastrar</Button>
                </div>

                <p className="px-8 text-center text-sm text-muted-foreground">
                    Ao clicar em entrar, você aceita os nossos&nbsp;
                    <a className="underline underline-offset-4 hover:text-primary" href="/terms">Termos de serviço</a>&nbsp;e&nbsp;
                    <a className="underline underline-offset-4 hover:text-primary" href="/privacy">Politica de Privacidade</a>.
                </p>
            </div>
        </div>
    );
}