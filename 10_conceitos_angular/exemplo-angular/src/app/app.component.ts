import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './agenda/css/agenda.component.css']
})

export class AppComponent {
  empresa = 'Capgemini';

  //exemplo 03- binding unidirecional (componente -> view)

  rnd: number = Math.random();

  
}
