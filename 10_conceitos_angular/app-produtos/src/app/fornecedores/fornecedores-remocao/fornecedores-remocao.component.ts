import { FornecedoresInterface } from './../fornecedores-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { FornecedoresServiceService } from './../fornecedores-service.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-fornecedores-remocao',
  templateUrl: './fornecedores-remocao.component.html',
  styleUrls: ['./fornecedores-remocao.component.css']
})
export class FornecedoresRemocaoComponent implements OnInit {

  constructor(
    private service: FornecedoresServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  public fornecedor: FornecedoresInterface;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getFornecedorID(id)
      .subscribe(res => {
        this.fornecedor = res;
      });
  }

  public remover(fornecedor: FornecedoresInterface): void {
    this.service.deleteFornecedoresWS(fornecedor._id)
      .subscribe(() => {
        this.router.navigate(['/fornecedores']);
      })
  }
  cancelar(): void {
    this.router.navigate(['/fornecedores']);
  }

}
