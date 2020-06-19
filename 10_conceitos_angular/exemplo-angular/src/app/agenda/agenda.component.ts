import { AgendaService } from './../services/agenda.service';
import { Component } from '@angular/core';

@Component({    //Decorator propriedades que irão acessar esse componente
    selector: 'agenda-comp',
    templateUrl: 'views/agenda.component.html',
    styleUrls: ['css/agenda.component.css']
})

export class AgendaComponent {

    nome: string = "Breno Bastos";
    diasDisponievis: string[];
    horasDisponiveis: string[];

    constructor(public primeiro: AgendaService) {
        this.diasDisponievis = primeiro.getDias();
        this.horasDisponiveis = primeiro.getHoras();
    }

}