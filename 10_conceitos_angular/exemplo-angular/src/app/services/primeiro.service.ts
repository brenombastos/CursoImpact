import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class PrimeiroService {
    getTopicos(): string[] {
        return [
            'JavaScript',
            'Node.js',
            'MongoDB',
            'WebService',
            'Angular',
            'Projetos'
        ];
    }
}