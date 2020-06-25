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
import { FornecedoresHomeComponent } from './fornecedores/fornecedores-home/fornecedores-home.component';
import { FornecedoresListaComponent } from './fornecedores/fornecedores-lista/fornecedores-lista.component';
import { FornecedoresNovoComponent } from './fornecedores/fornecedores-novo/fornecedores-novo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProdutosComponent,
    NotFoundComponent,
    SubListaPipe,
    FornecedoresHomeComponent,
    FornecedoresListaComponent,
    FornecedoresNovoComponent
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
