import { Pessoa } from './../classes/pessoa.classe';
import { Component } from "@angular/core";


@Component({
    selector: 'app-exe04',
    templateUrl: 'views/event-binding.component.html',
    styleUrls: ['css/primeiro.component.css', '../estilos.component.css']

})

export class EventBindingComponent {

    //Exemplo 04 - binding unidirecional
    //Gerando uma lista de pessoas
    pessoas: Pessoa[];
    item: string = "";

    constructor() {
        this.listar();
    }

    listar() {
        this.pessoas = [
            { nome: 'Pedro', idade: 23 },
            { nome: 'Claudio', idade: 40 },
            { nome: 'Gustavo', idade: 35 },
            { nome: 'Lucelia', idade: 40 }
        ]
    }

    filtrar(event): void {
        this.listar();
        this.item = event.target.value;
        this.pessoas = this.pessoas
            .filter(p => p.nome.toLowerCase()
                .includes(this.item.toLowerCase()));
    }
    mostrarTodos(): void {
        this.item = ""
        this.listar();
    }
}