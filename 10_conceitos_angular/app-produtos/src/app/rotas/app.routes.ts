import { Routes } from "@angular/router";

import { PrincipalComponent } from '../inicio/principal/principal.component';
import { HomeComponent } from '../home/home/home.component';
import { ProdutosComponent } from './../produtos/produtos/produtos.component';
import { NotFoundComponent } from '../erros/not-found/not-found.component';
import { FornecedoresHomeComponent } from './../fornecedores/fornecedores-home/fornecedores-home.component';
import { FornecedoresNovoComponent } from '../fornecedores/fornecedores-novo/fornecedores-novo.component';


// Na definição das rotas, primeiro colocamos as mais específicas, e por ultimo as mais gerais.
export const appRoutes: Routes = [
    { path: "", component: PrincipalComponent },
    { path: "home", component: HomeComponent },
    { path: "produtos", component: ProdutosComponent },
    { path: "fornecedores", component: FornecedoresHomeComponent },
    { path: "fornecedores/novo", component: FornecedoresNovoComponent },
    { path: "**", component: NotFoundComponent }
];