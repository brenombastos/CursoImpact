import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class AgendaService {
    getDias(): string[] {
        return [
            'Segunda',
            'Terça',
            'Quarta',
            'Quinta',
            'Sexta'
        ];
    }
    getHoras(): string[] {
        return [
            '15:00',
            '16:00',
            '17:00'
        ];
    }
}