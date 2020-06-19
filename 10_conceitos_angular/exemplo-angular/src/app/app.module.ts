import { AgendaService } from './services/agenda.service';
import { PrimeiroService } from './services/primeiro.service';
import { AgendaComponent } from './agenda/agenda.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimeiroComponent } from './exemplos/primeiro.component';

@NgModule({
  declarations: [
    //todos os componentes desse modules
    AppComponent,
    PrimeiroComponent,
    AgendaComponent
  ],
  //todos os modules usados nos seus components
  imports: [
    BrowserModule
  ],
  //todos os serviços (injeção de dependencia)
  providers: [
    PrimeiroService,
    AgendaService
  ],
  //componenet principal da aplicação
  bootstrap: [AppComponent]
})
export class AppModule { }
