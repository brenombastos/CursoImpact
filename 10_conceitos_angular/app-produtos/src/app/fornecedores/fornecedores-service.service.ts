import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FornecedoresInterface } from './fornecedores-interface';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresServiceService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3200/ws/fornecedores"

  //retorna todos os fornecedores
  public getListaFornecedoresWS(): Observable<FornecedoresInterface[]> {
    return this.http.get<FornecedoresInterface[]>(this.url);
  }

  public getFornecedorID(id: String): Observable<FornecedoresInterface> {
    const URL = `${this.url}/${id}`
    return this.http.get<FornecedoresInterface>(URL);
  }

  public postFornecedoresWS(fornecedores: FornecedoresInterface): Observable<FornecedoresInterface> {
    return this.http.post<FornecedoresInterface>(this.url, fornecedores);
  }

  public putFornecedoresWS(fornecedores: FornecedoresInterface): Observable<FornecedoresInterface> {
    const putURL = `${this.url}/${fornecedores._id}`
    return this.http.put<FornecedoresInterface>(putURL, fornecedores);
  }

  public deleteFornecedoresWS(id: string): Observable<FornecedoresInterface> {
    const deleteURL = `${this.url}/${id}`;
    return this.http.delete<FornecedoresInterface>(deleteURL);
  }
}
