import { Injectable } from '@angular/core';

export class Produto {


    // constructor(codigo: number, descricao: string) {
    //     this.codigo = codigo;       //propriedade set codigo
    //     this.descricao = descricao; //propriedade set descrição
    // }

    public _id?: string; // representa o id do produto no banco de dados
    
    //Propriedades : getters / setters
    //Propriedade codigo
    private _codigo?: number;
    public get codigo(): number {
        return this._codigo;
    }
    public set codigo(v: number) {  //produto = new Produto()
        if (v <= 0) {
            throw new Error("Código inválido");
        }
        this._codigo = v;

    }

    //Propriedade descrição
    private _descricao?: string;
    public get descricao(): string {
        return this._descricao;
    }
    public set descricao(v: string) {
        this._descricao = v;
    }

    //propriedade unidade
    private _unidade?: string;
    public get unidade(): string {
        return this._unidade;
    }
    public set unidade(v: string) {
        this._unidade = v;
        if (v.length < 2 || v.length > 5) {
            throw new Error("A unidade deve ter entre 2 e 5 caracteres.")
        }
    }

    //propriedade preço
    private _preco?: number;
    public get preco(): number {
        return this._preco;
    }
    public set preco(v: number) {
        if (v < 0) {
            throw new Error("Preço deve ser no mínimo 0!")
        }
        this._preco = v;
    }


    //propriedade categoria
    private _categoria?: string;
    public get categoria(): string {
        return this._categoria;
    }
    public set categoria(v: string) {
        this._categoria = v;
    }


    //método para receber os dados do produto
    // public setDados(cod, desc, unid, prec, cate): void {
    //     this.codigo = cod;
    //     this.descricao = desc;
    //     this.unidade = unid;
    //     this.preco = prec;
    //     this.categoria = cate;

    // }

}
