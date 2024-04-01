import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { MdEdit, MdDelete } from "react-icons/md";

import moment from "moment";
import TagComponent from "@/components/tag";

export const Users = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Usuários</CardTitle>
                <CardDescription>Cadastro dos usuários com permissões e perfis de acesso!</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Id</TableHead>
                            <TableHead>Nome</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Perfil</TableHead>
                            <TableHead>Criado em</TableHead>
                            <TableHead>Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>Fabio C.</TableCell>
                            <TableCell>fabio.cantarani@gmail.com</TableCell>
                            <TableCell><TagComponent title="Admin"/></TableCell>
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
    );
}