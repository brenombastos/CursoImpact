import { Injectable } from '@angular/core';

export interface FornecedoresInterface {
    _id?: string; // representa o id do produto no banco de dados
    cnpj: string;
    nome: string;
    dataCadastro: string;
    endereco: string;
    email: string;

}
