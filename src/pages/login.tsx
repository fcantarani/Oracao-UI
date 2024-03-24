import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { z } from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export default function Login() {

    const createLoginFormSchema = z.object({
        email: z.string()
            .min(1, "O e-mail é obrigatório.")
            .email("Digite um e-mail válido."),
        password: z.string()
            .min(5, "Digite pelo menos 5 caracteres."),
    })

    type createLoginFormData = z.infer<typeof createLoginFormSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<createLoginFormData>({
        resolver: zodResolver(createLoginFormSchema)
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex h-screen mx-auto items-center bg-gray-100">
                <div className="flex flex-col md:w-3/12 w-11/12 md:h-3/6 h-4/6 p-4 mx-auto border rounded-lg shadow-xl gap-4 bg-white">
                    <div className="flex justify-center">
                        <h1>Digite seu e-mail e senha para entrar.</h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input {...register("email")} type="email" id="email" placeholder="meu@email.com" />
                        {errors.email && <span className="text-xs text-red-600">{errors.email.message}</span>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="password">Senha</Label>
                        <Input {...register("password")} type="password" id="password" placeholder="******" />
                        {errors.password && <span className="text-xs text-red-600">{errors.password.message}</span>}
                    </div>
                    <div className="w-full">
                        <Button type="submit" className="w-full">Entrar</Button>
                    </div>

                    <Separator />

                    <div className="">
                        <Button className="w-full" variant={"secondary"}>Cadastrar</Button>
                    </div>

                    <p className="px-8 text-center text-sm text-muted-foreground">
                        Ao clicar em entrar, você aceita os nossos&nbsp;
                        <a className="underline underline-offset-4 hover:text-primary" href="/terms">Termos de serviço</a>&nbsp;e&nbsp;
                        <a className="underline underline-offset-4 hover:text-primary" href="/privacy">Politica de Privacidade</a>.
                    </p>
                </div>
            </div >
        </form>
    );
}