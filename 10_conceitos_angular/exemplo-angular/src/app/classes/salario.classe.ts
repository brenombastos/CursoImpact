import { Injectable } from '@angular/core';

@Injectable()
export class Salario {
    valor: number;

    constructor() {
        this.valor = 0;
    }
    calcular(): number { // retorna o valor do imposto
        return this.valor * (10 / 100);
    }
}