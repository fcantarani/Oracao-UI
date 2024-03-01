import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Badge, BadgeCheck, PlusCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Label } from "./components/ui/label";
import { useState } from "react";
import { Textarea } from "./components/ui/textarea";
import { useForm } from "react-hook-form";

export function App() {
  const form = useForm();
  const [pray, setPray] = useState(false);

  const handleSubmit = form.handleSubmit((data) => {
    console.log("data===> ", data);
  });

  return (
    <div>
      <div className="max-w-7xl p-6 mx-auto space-y-4">
        <div className="flex items-center justify-between">
          <Dialog>
            <div className="flex w-full justify-end">
              <DialogTrigger aschild>
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
              <form onSubmit={handleSubmit} className="space-y-6" action="POST">
                <div className="grid grid-cols-4 items-center text-right gap-2">
                  <Label htmlfor="category">Categoria</Label>
                  <Input
                    className="col-span-3"
                    id="category"
                    {...form.register("category")}
                  />
                </div>

                <div className="grid grid-cols-4 items-center text-right gap-2">
                  <Label htmlfor="title">Titulo</Label>
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
                  <DialogClose aschild>
                    <Button type="button" variant="outline">
                      Cancelar
                    </Button>
                  </DialogClose>
                  <Button type="submit">Salvar</Button>
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
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>{i * i * 4}</TableCell>
                    <TableCell>Ação de Graça {i}</TableCell>
                    <TableCell>Pedido {i}</TableCell>
                    <TableCell>
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
    </div>
  );
}
