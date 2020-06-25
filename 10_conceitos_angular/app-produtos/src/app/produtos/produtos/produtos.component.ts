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
  }
  public incluir(produto: Produto) {
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

  // p1: Produto = new Produto();
  // p2: Produto = new Produto();


  // // o objeto só p1 pode ser acessado dentro de uma função
  // public listarProdutos() {

  //   this.p1.setDados(10, 'Tablet', 'pc', 500.0, 'INFORMATICA')
  //   this.p1.setDados(20, 'Camisa', 'pc', 50.0, 'VESTUARIO')

  //   this.produtos.push(this.p1);
  //   this.produtos.push(this.p2);
  // }

  //definindo uma lista de produtos com o formato de objeto JSON


}
