import { Categoria } from './../classes/categoria.classe';
import { Produto } from './../classes/produto.classe';
import { Injectable } from "@angular/core";


@Injectable()
export class ProdutosService {
    getProdutos(): Produto[] {
        return [
            { categoria: 'limpeza', codigo: 1, descricao: "Amaciante de roupas", preco: 15 },
            { categoria: 'roupas', codigo: 2, descricao: "Roupas, regata feminina", preco: 30 },
            { categoria: 'calçado', codigo: 3, descricao: "Tenis nike", preco: 450 },
            { categoria: 'roupas', codigo: 4, descricao: "Calça de moletom", preco: 90 }
        ];
    }

    getCategorias(): Categoria[] {
        return [
            { categoria: 'limpeza', descricao: 'produto de limpeza' },
            { categoria: 'roupas', descricao: 'roupas de uso no geral' },
            { categoria: 'calçado', descricao: 'todo tipo de calçados' }
        ];
    }
}