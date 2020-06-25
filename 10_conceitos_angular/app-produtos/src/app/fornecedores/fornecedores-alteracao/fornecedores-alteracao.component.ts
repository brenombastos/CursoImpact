import { FornecedoresInterface } from './../fornecedores-interface';
import { Component, OnInit } from '@angular/core';
import { FornecedoresServiceService } from '../fornecedores-service.service';
import { ActivatedRoute, Router } from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'app-fornecedores-alteracao',
  templateUrl: './fornecedores-alteracao.component.html',
  styleUrls: ['./fornecedores-alteracao.component.css']
})
export class FornecedoresAlteracaoComponent implements OnInit {

  constructor(
    private service: FornecedoresServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  public fornecedor: FornecedoresInterface;

  ngOnInit(): void {
    //ActivatedRoute fornece informações sobre a rota atualmente em uso

    const id = this.route.snapshot.paramMap.get('id');
    this.service.getFornecedorID(id)
      .subscribe(res => {
        this.fornecedor = res;
        this.fornecedor.dataCadastro = moment(res.dataCadastro).format('YYYY-MM-DD');
        console.log(this.fornecedor);
      });

  }

  public atualizar(fornecedor: FornecedoresInterface): void {
    this.service.putFornecedoresWS(fornecedor)
      .subscribe(() => {
        this.router.navigate(['/fornecedores']);
      })
  }
  cancelar(): void {
    this.router.navigate(['/fornecedores']);
  }

}
