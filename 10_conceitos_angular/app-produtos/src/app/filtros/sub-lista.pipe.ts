import { Produto } from './../classes/produto';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sublista'
})
export class SubListaPipe implements PipeTransform {

  transform(produtos: Produto[], input: string): Produto[] {
    if (!input) {
      return produtos;
    } else {
      return produtos.filter(produto =>
        produto.descricao.toLowerCase()
          .includes(input.toLowerCase()));
    }

  }

}
