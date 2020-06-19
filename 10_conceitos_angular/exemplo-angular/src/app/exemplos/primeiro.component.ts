import { PrimeiroService } from './../services/primeiro.service';
import { Component } from '@angular/core';

@Component({    //Decorator propriedades que irão acessar esse componente
    selector: 'primeiro-comp',
    templateUrl: 'views/primeiro.component.html',
    styleUrls: ['css/primeiro.component.css', '../estilos.component.css']
    
})

export class PrimeiroComponent {

    curso: string = "Node e Angular";
    topicos: string[];

    //construtor da classe: executado sempre que o componente é criado
    constructor(public primeiro: PrimeiroService) {
        this.topicos = primeiro.getTopicos();
    }
}