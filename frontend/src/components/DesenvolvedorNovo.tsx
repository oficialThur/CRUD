import { Card, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const DesenvolvedorNovo = () => {
  return (
    <Card className="w-[550px] h-[500px] flex flex-col justify-center bg-white text-black">
        <CardTitle className="text-2xl font-bold p-2 text-center sticky top-0">Novo Desenvolvedor</CardTitle>
        <CardHeader className="flex flex-col justify-center items-center">
            <Input type="text" placeholder="Nome" />
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="Empresa" />
            <Input type="text" placeholder="Nível" />
            <Input type="text" placeholder="Linguagem Primária" />
            <Button className="bg-black text-white font-bold w-full mt-4">Cadastrar</Button>
        </CardHeader>
    </Card>
  )
}

export default DesenvolvedorNovo