import { TwoWayDatabindingComponent } from './exemplos/twoway-databinding.component';
import { ProdutosService } from './services/produtos.service';
import { Exercicio02Component } from './exercicios/exercicio02.component';
import { Exercicio01Component } from './exercicios/exercicio01.component';
import { PropertyBindingComponent } from './exemplos/property-binding.component';
import { EventBindingComponent } from './exemplos/event-binding.component';
import { AgendaService } from './services/agenda.service';
import { PrimeiroService } from './services/primeiro.service';
import { AgendaComponent } from './agenda/agenda.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrimeiroComponent } from './exemplos/primeiro.component';
import { PrincipalComponent } from './inicio/principal/principal.component';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [
    //todos os componentes desse modules
    AppComponent,
    PrimeiroComponent,
    AgendaComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    Exercicio01Component,
    Exercicio02Component,
    TwoWayDatabindingComponent,
    PrincipalComponent,
    HomeComponent
  ],
  //todos os modules usados nos seus components
  imports: [
    BrowserModule, FormsModule
  ],
  //todos os serviços (injeção de dependencia)
  providers: [
    PrimeiroService,
    AgendaService,
    ProdutosService
  ],
  //componenet principal da aplicação
  bootstrap: [AppComponent]
})
export class AppModule { }
