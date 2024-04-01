import TagComponent from "@/components/tag";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import moment from "moment";
import { MdEdit, MdDelete } from "react-icons/md";

export default function MyRequests() {
  return (
    <main className="my-4 w-full">

      <Card>
        <CardHeader>
          <CardTitle>Meus Pedidos</CardTitle>
          <CardDescription>Cadastro dos pedidos realizados por mim!</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Id</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Titulo</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Criado em</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">ORA001</TableCell>
                <TableCell>Saúde</TableCell>
                <TableCell>Oração por mamae</TableCell>
                <TableCell>Peço oração pela minha mãe e por todos os problemas de saude dela</TableCell>
                <TableCell>{moment().format("DD-MM-YYYY")}</TableCell>
                <TableCell className="flex gap-4">
                  <Button size="sm">
                    <MdEdit className="mr-2 h-4 w-4" /> Editar
                  </Button>
                  <Button size="sm" variant={"destructive"} >
                    <MdDelete className="mr-2 h-4 w-4" /> Excluir
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </CardContent>
      </Card>

    </main>
  );
}
