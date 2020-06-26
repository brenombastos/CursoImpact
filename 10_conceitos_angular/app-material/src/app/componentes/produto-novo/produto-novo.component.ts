import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from 'src/app/classes/produto';

@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.css']
})
export class ProdutoNovoComponent implements OnInit {
  constructor(
    private service: ProdutosService,
    private router: Router) { }
  public produto: Produto;

  ngOnInit(): void {
    this.produto = {
      codigo: 0,
      descricao: '',
      unidade: '',
      categoria: '',
      preco: 0
    }
  }

  incluirProduto(): void {
    this.service.postProdutosWS(this.produto)
      .subscribe(() => {
        this.service.mostrarMensagem('Produto incluído com sucesso!');
        this.router.navigate(['/produtos']);
      });
  }

  cancel() {
    this.router.navigate(['/produtos']);
  }

}
