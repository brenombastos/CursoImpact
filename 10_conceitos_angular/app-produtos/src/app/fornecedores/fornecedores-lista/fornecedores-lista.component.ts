import { FornecedoresInterface } from './../fornecedores-interface';
import { FornecedoresServiceService } from './../fornecedores-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedores-lista',
  templateUrl: './fornecedores-lista.component.html',
  styleUrls: ['./fornecedores-lista.component.css']
})
export class FornecedoresListaComponent implements OnInit {

  constructor(private service: FornecedoresServiceService) { }


  //definindo uma lista de fornecedores
  public fornecedores: FornecedoresInterface[];
  ngOnInit(): void {
    //lista de fornecedores carregada
    this.listar();
  }

  public listar(): void {
    this.service.getListaFornecedoresWS()
      .subscribe(res => this.fornecedores = res);
  }

}
