import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  //ViewContainerRef ele representa o repositório do component que executara a diretiva
  //TemplateRef referencia ao elemento dentro de viewContainerRef que sofrerá a ação da diretiva
  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef) { }

  @Input() set ngElse(condicao: boolean) {
    if (!condicao) {
      this.view.createEmbeddedView(this.template);
    } else {
      this.view.clear();
    }
  }

}
