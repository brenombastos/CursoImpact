import { Router } from '@angular/router';
import { FornecedoresServiceService } from './../fornecedores-service.service';
import { Component, OnInit } from '@angular/core';
import { FornecedoresInterface } from '../fornecedores-interface';

@Component({
  selector: 'app-fornecedores-novo',
  templateUrl: './fornecedores-novo.component.html',
  styleUrls: ['./fornecedores-novo.component.css']
})
export class FornecedoresNovoComponent implements OnInit {

  constructor(private service: FornecedoresServiceService, private router: Router) { }

  public novoFornecedor: FornecedoresInterface;

  ngOnInit(): void {
    this.novoFornecedor = {
      cnpj: "", dataCadastro: "", email: "", endereco: "", nome: ""
    }
  }

  public incluir(fornecedor: FornecedoresInterface): void {
    //this.produtos.push(produto);
    this.service.postFornecedoresWS(fornecedor)
      .subscribe(() => {
        this.router.navigate(['/fornecedores']);
      });
  }
  cancelar(): void {
    this.router.navigate(['/fornecedores']);
  }
}
