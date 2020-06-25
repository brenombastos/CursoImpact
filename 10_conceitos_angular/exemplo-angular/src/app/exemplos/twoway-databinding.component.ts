import { Salario } from './../classes/salario.classe';
import { Component } from '@angular/core';

@Component({
    selector: "two-way",
    templateUrl: "views/twoway-databinding.html"
})

export class TwoWayDatabindingComponent {
    // exemplo: two-way data binding

    salario: Salario = new Salario
    imposto: number;
    

    efetuarCalculo(){
        this.imposto = this.salario.calcular();
    }
}