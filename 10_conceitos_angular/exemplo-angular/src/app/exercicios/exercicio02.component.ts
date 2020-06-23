import { Categoria } from '../classes/categoria.classe';
import { Produto } from '../classes/produto.classe';
import { Component, OnInit } from "@angular/core";
import { ProdutosService } from '../services/produtos.service';


@Component({
    selector: 'app-exercicio02',
    templateUrl: 'views/exercicio02.component.html',
    styleUrls: ['css/primeiro.component.css', '../estilos.component.css']

})

export class Exercicio02Component implements OnInit {
    //Exercicio 01 - binding unidirecional
    //Gerando uma lista de produtos

    itemProduto: string = "";
    //o modificador private, no parametro do construtor, faz com que este parametro se torne um atributo da classe
    constructor(private service: ProdutosService) { }
    ngOnInit(): void {
        this.produtos = this.service.getProdutos();
        this.categorias = this.service.getCategorias();

    }
    produtos: Produto[];
    categorias: Categoria[];

    filtrarProduto(categoria): void {
        this.produtos = this.service.getProdutos();
        if (categoria.length > 0) {
            this.produtos = this.produtos.filter(
                p => p.categoria === categoria);
        }
    }
}