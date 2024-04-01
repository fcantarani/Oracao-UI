import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge, BadgeCheck, PlusCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

export default function Home() {
  const form = useForm();
  const [pray, setPray] = useState(false);

  const handleSubmit = form.handleSubmit((data) => {
    console.log("data===>", data);
  });

  return (
    <main className="my-4">
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <Dialog>
            <div className="flex w-full justify-end">
              <DialogTrigger asChild>
                <Button>
                  <PlusCircle className="size-4 mr-2" />
                  Novo Pedido
                </Button>
              </DialogTrigger>
            </div>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Nova Oração</DialogTitle>
                <DialogDescription>
                  Criação de uma nova oração.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={() => handleSubmit} className="space-y-6" action="POST">
                <div className="grid grid-cols-4 items-center text-right gap-2">
                  <Label htmlFor="category">Categoria</Label>
                  <select
                    className="inline-flex items-center 
                                justify-center whitespace-nowrap 
                                rounded-md text-sm 
                                transition-colors 
                                focus-visible:outline-none 
                                focus-visible:ring-1 
                                focus-visible:ring-ring 
                                disabled:pointer-events-none 
                                disabled:opacity-50 border 
                                border-input bg-background 
                                shadow-sm hover:bg-accent 
                                hover:text-accent-foreground 
                                h-9 px-4 py-2 w-[200px] appearance-none 
                                font-normal"
                    {...form.register("category")}
                  >
                    <option key="null" value="null">
                      --- Selecione uma opção ---
                    </option>
                    <option key="adoracao" value="adoracao">
                      Adoração
                    </option>
                    <option key="acaodegracas" value="acaodegracas">
                      Ação de graças
                    </option>

                    <option key="confissaodepecado" value="confissaodepecado">
                      Confissão de pecado
                    </option>
                    <option key="peticaoesuplica" value="peticaoesuplica">
                      Petição e súplica
                    </option>
                    <option key="intercessao" value="intercessao">
                      Intercessão
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-4 items-center text-right gap-2">
                  <Label htmlFor="title">Titulo</Label>
                  <Input
                    className="col-span-3"
                    id="title"
                    {...form.register("title")}
                  />
                </div>

                <div className="grid grid-cols-4 items-center text-right gap-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    className="col-span-3"
                    id="description"
                    {...form.register("description")}
                  />
                </div>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">
                      Cancelar
                    </Button>
                  </DialogClose>
                  <DialogTrigger>
                    <Button type="submit">Salvar</Button>
                  </DialogTrigger>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="border rounded-lg p-2">
          <Table>
            <TableHeader>
              <TableHead>Id</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Titulo</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Orar</TableHead>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 18 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>{i * i * 4}</TableCell>
                    <TableCell>Ação de Graça {i}</TableCell>
                    <TableCell>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </TableCell>
                    <TableCell>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </TableCell>
                    <TableCell>
                      <Button
                        variant={"outline"}
                        className="flex gap-2 "
                        onClick={() => setPray(!pray)}
                      >
                        {!pray ? (
                          <span className="flex gap-2">
                            <Badge className="text-purple-700 size-5" />
                            Começar a orar
                          </span>
                        ) : (
                          <span className="flex gap-2">
                            <BadgeCheck className="text-purple-700 size-5" />
                            Deixar de orar
                          </span>
                        )}
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
