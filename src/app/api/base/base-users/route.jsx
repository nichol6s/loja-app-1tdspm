import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';


export async function GET() {
    //Realziando a leitura do arwquivo db.json desde a raiz do projeto.
    const file = await fs.readFile(process.cwd() + '/src/app/api/base/db.json', 'utf8');  //process.cwd() retorna o caminho da raiz do projeto.
  
    const listaUsuarios = await JSON.parse(file); //Convertendo o arquivo para JSON.

    //Retornando os dados do arquivo db.json.
    return NextResponse.json(listaUsuarios.usuarios);

}

const handleLogin = async (email,senha)=>{
    //Realziando a leitura do arquivo db.json desde a raiz do projeto.
    const file = await fs.readFile(process.cwd() + '/src/app/api/base/db.json', 'utf8');  //process.cwd() retorna o caminho da raiz do projeto.
    
    //Realizando a conversão do arquivo para que fique manipulavél!
    const listaUsuarios = await JSON.parse(file); //Convertendo o arquivo para JSON.

    //Criando a lógica de validação do usuário.
    //Abaixo eu retorno apenas a lista de dentro do objeto do arquivo...
    //Utilizando os parâmetros {email e senha}, realizo a comparação com o método find();
    //Aqui devemos prestar atenção, pois o objeto devolvido, ele pode ser nulo...
    const userValidado = listaUsuarios.usuarios.find((user) => user.email == email && user.senha == senha);

    //Retornando o objeto da validação acima!!!
    //Será retornado para quem chamou esta função e passou os parâmetros(email e senha!)
    return userValidado;
}


export async function POST(request,response) {
    
    //Recendo os dados do request.
    //Estes dados podem ser enviados de diversas fontes, porém somente através de métodos HTTP-POST.
    //Vamos realizar o destructuring, para facilitar a absorção destes dados dentro destes método e o encaminhamento...
    //Veja que adicionei dados que ainda não existem no login, isso foi realizado já pensando em utilizar este mesmo método para criar cadastro também.
    const {info,nome,email,senha} = await request.json();

    //Agora através de um dos dados acima, pdoemos determinar, qual é o tipo de ação que está ocorrendo, se é login ou cadastro ou outra.
    if(info == "login"){
        //Aqui neste momento, já sabemos qual é a ação que está sendo realizada então podemos utilizar as "RN"=Regras de Negócio, Ex: quantidade de caractéres na senha, tipo de e-mail, etc;
        //Vamos chamar a função de login e passar os dados que são nescessários para este processo no caso, {email e senha}. Não vamos esquecer de receber o retorno da função que é um objeto e verificar ele se está nulo ou válido, pois assim, poderemos retornar o objeto ou false para quem fez o request.
        const usuario = await handleLogin(email,senha);
        if(usuario){
            return NextResponse.json(usuario);
        }else{
            return NextResponse.json(false);
        }
        //Abaixo já estamos deixando a estrutura pronta para receber a funcionalidade de cadastro.
    }else if(info == "cadastro"){
        return NextResponse.json(false);
    }else{
        return NextResponse.json(false);
    }
}