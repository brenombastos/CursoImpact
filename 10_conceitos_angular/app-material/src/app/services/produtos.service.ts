import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './../classes/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3200/ws/produtos"

  public getListaProdutosWS(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }

  public postProdutosWS(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, produto);
  }

  public putProdutosWS(produto: Produto): Observable<Produto> {
    const putURL = `${this.url}/${produto._id}`
    return this.http.put<Produto>(putURL, produto);
  }
  public deleteProdutosWS(id: string): Observable<Produto> {
    const deleteURL = `${this.url}/${id}`;
    return this.http.delete<Produto>(deleteURL);
  }
}
