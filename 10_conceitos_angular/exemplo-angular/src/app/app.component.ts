import { Component } from '@angular/core';

import { Pessoa } from './classes/pessoa.classe';
import { Produto } from './classes/produto.classe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './agenda/css/agenda.component.css']
})

export class AppComponent {
  empresa = 'Capgemini';
}
