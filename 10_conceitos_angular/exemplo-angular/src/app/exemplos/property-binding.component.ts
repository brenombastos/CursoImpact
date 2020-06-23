import { Component } from "@angular/core";


@Component({
    selector: 'app-exe03',
    templateUrl: 'views/property-binding.component.html',
    styleUrls: ['css/primeiro.component.css', '../estilos.component.css']

})

export class PropertyBindingComponent {

    //exemplo 03- binding unidirecional (componente -> view)
    rnd: number = Math.random();

    urlImagem: string = "http://lorempixel.com/400/200/business";

}