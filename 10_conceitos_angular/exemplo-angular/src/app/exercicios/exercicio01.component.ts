import { Categoria } from './../classes/categoria.classe';
import { Produto } from './../classes/produto.classe';
import { Component } from "@angular/core";


@Component({
    selector: 'app-exercicio01',
    templateUrl: 'views/exercicio01.component.html',
    styleUrls: ['css/primeiro.component.css', '../estilos.component.css']

})

export class Exercicio01Component {
    //Exercicio 01 - binding unidirecional
    //Gerando uma lista de produtos

    produtos: Produto[];
    categoria: Categoria[];
    itemProduto: string = "";


    constructor() {
        this.listarProdutos();
    }

    listarProdutos() {
        this.produtos = [
            { categoria: 'limpeza', codigo: 1, descricao: "Amaciante de roupas", preco: 15 },
            { categoria: 'roupas', codigo: 2, descricao: "Roupas, regata feminina", preco: 30 },
            { categoria: 'calçado', codigo: 3, descricao: "Tenis nike", preco: 450 },
            { categoria: 'roupas', codigo: 4, descricao: "Calça de moletom", preco: 90 },
        ]
    }

    listaCategorias() {
        this.categoria = [
            { categoria: 'limpeza', descricao: 'produto de limpeza' },
            { categoria: 'roupas', descricao: 'roupas de uso no geral' },
            { categoria: 'calçado', descricao: 'todo tipo de calçados' }
        ]

    }

    filtrarProduto(event): void {
        this.listarProdutos();
        this.itemProduto = event.target.value;
        this.produtos = this.produtos
            .filter(p => p.descricao.toLowerCase()
                .includes(this.itemProduto.toLowerCase()));
    }
    
}