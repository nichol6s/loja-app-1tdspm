import { NextResponse } from "next/server";

const produtos = [
    {"id": 1,
    "nome": 'Mamão',
    "tipo": 'Fruta laranja',
    "desc": 'Rica em vitamina E'},
    {"id": 2,
    "nome": 'Melão',
    "tipo": 'Fruta verde',
    "desc": 'Rico em vitamina A'},
    {"id": 3,
    "nome": 'Manga',
    "tipo": 'Fruta Amarela',
    "desc": 'Rica em vitamina C'}
];

export async function GET(request, {params}){

    const id = params.id;
    if(id > 0 && id <= (produtos.length)){
      return NextResponse.json(produtos.find((produto) => produto.id == id));
    }else{
        return id == 0 ? NextResponse.json(produtos) : NextResponse.redirect('http://localhost:3000/error');
    }
        
}
