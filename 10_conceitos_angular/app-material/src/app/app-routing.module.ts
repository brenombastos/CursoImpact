import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { ProdutoNovoComponent } from './componentes/produto-novo/produto-novo.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "produtos", component: ProdutosComponent },
  { path: "produtos/novo", component: ProdutoNovoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
