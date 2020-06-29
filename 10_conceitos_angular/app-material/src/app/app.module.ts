import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHeaderComponent } from './modelos/app-header/app-header.component';

import { HttpClientModule } from "@angular/common/http";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";

//Para o formulario
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
//Fim Fomulário

import { FooterComponent } from './modelos/footer/footer.component';
import { NavbarComponent } from './modelos/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { ProdutoNovoComponent } from './componentes/produto-novo/produto-novo.component';
import { ProdutoListaComponent } from './componentes/produto-lista/produto-lista.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ProdutosComponent,
    ProdutoNovoComponent,
    ProdutoListaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule, MatSidenavModule, MatListModule, MatCardModule, MatButtonModule, HttpClientModule, MatSnackBarModule,
    FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
