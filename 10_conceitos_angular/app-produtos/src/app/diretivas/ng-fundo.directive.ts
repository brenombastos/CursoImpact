import { Directive, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[ngFundo]'
})
export class NgFundoDirective implements OnInit {
  //Diretiva de atributo: configurando classe css para cor de fundo


  constructor() { }

  // Define a prioridade a ser aplicada pela diretiva
  @HostBinding('style.backgroundColor') cor: string;

  //Especifica a ação do evento sobre a propriedade
  @HostListener('mouseover') moverMouse() {
    this.cor = "lightblue";
  }
  @HostListener('mouseout') retirarMouse() {
    this.cor = "transparent";

  }
  ngOnInit(): void {
    this.cor = "transparent";
  }
}
