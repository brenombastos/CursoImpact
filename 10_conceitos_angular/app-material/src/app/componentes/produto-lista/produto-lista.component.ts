import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from 'src/app/classes/produto';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  constructor(private service: ProdutosService) { }

  produtos: Produto[];

  listaColunas = ['codigo', 'descricao', 'unidade', 'preco', 'acao']



  ngOnInit(): void {
    this.service.getListaProdutosWS()
      .subscribe(res => this.produtos = res);
  }
}