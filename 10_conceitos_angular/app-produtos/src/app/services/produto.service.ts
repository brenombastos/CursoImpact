import { Injectable } from '@angular/core';
import { Produto } from './../classes/produto';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class ProdutoService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3200/ws/produtos"

  public getListaProdutosWS(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }

  public postProdutosWS(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, produto);
  }




  public getListaProdutos(): Produto[] {
    return [
      { codigo: 10, descricao: 'Tablet', unidade: 'pc', preco: 500.00, categoria: 'INFORMATICA' },
      { codigo: 20, descricao: 'Camisa', unidade: 'pc', preco: 45.00, categoria: 'VESTUARIO' },
      { codigo: 30, descricao: 'Big Mac', unidade: 'un', preco: 20.00, categoria: 'ALIMENTACAO' }

    ]
  }
}
