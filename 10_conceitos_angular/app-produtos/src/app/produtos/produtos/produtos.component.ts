import { async } from '@angular/core/testing';
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './../../classes/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  providers: [ProdutoService]
})
export class ProdutosComponent implements OnInit {

  constructor(private service: ProdutoService) { }

  //definindo uma lista de produtos com instancias da classe
  public produtos: Produto[];

  ngOnInit(): void {
    //this.produtos = this.service.getListaProdutos();
    //lista carregada
    this.listar();
  }

  public listar(): void {
    this.service.getListaProdutosWS()
      .subscribe(res => this.produtos = res);
  }


  //para um produto selecionado
  public produtoSlecionado: Produto;

  public selecionar(item: Produto): void {
    this.produtoSlecionado = item;
  }




  private novoProduto: Produto;

  public novo() {
    this.novoProduto = { codigo: 0, descricao: '', unidade: '', preco: 0, categoria: '' }
    this.produtoSlecionado = this.novoProduto;
    console.log(this.novoProduto);
  }
  public incluir(produto: Produto): void {
    //this.produtos.push(produto);
    this.service.postProdutosWS(produto)
      .subscribe(
        res => JSON.stringify(res),
        error => alert(error),
        () => {
          //listar os produtos
          this.listar();
          alert('Produto incluido com sucesso!');
        }
      );
  }

  public alterar(produto: Produto): void {
    this.service.putProdutosWS(produto)
      .subscribe(
        res => JSON.stringify(res),
        error => alert(error),
        () => {
          this.listar();
          alert('Produto alterado com sucesso!');
        }
      );
  }

  public remover(produto: Produto): void {
    if (window.confirm('Tem certeza que deseja remover?')) {

      console.log(produto);
      
      this.service.deleteProdutosWS(produto._id)
        .subscribe(
          res => JSON.stringify(res),
          error => alert(error),
          () => {
            this.listar();
            this.novo;
            alert("Produto removido com sucesso!");
          }
        )
    }
  }

}
