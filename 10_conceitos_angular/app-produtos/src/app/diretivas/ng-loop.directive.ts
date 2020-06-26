import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ngLoop]'
})
export class NgLoopDirective implements OnInit {

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef) { }

  // Suponha que em um html, façamos o seguinte:
  // numeros: number[] = [2,4,6,7,8];
  // valor: number = 6;


  @Input('ngLoopEm') numeros: number[];
  @Input('ngLoopUsando') valor: number;

  ngOnInit(): void {
    //Vamos supor que os valores da coleção da diretiva (numeros) sejam apresentados
    //na view, execto o valor na variavel valor

    for (const n of this.numeros) {
      if (n != this.valor) {
        this.view.createEmbeddedView(this.template, {
          $implicit: n
        });
      }
    }

  }
}
