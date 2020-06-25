import { ProdutoService } from './services/produto.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";


import { appRoutes } from "./rotas/app.routes";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu/menu.component';
import { ProdutosComponent } from './produtos/produtos/produtos.component';
import { NotFoundComponent } from './erros/not-found/not-found.component';
import { SubListaPipe } from './filtros/sub-lista.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProdutosComponent,
    NotFoundComponent,
    SubListaPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [ProdutoService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
