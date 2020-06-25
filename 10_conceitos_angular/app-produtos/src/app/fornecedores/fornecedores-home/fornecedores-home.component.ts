import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedores-home',
  templateUrl: './fornecedores-home.component.html',
  styleUrls: ['./fornecedores-home.component.css']
})
export class FornecedoresHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  novoFornecedor(): void {
    this.router.navigate(['/fornecedores/novo']);
  }
}
