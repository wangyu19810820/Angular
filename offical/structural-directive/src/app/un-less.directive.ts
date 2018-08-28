import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnLess]'
})
export class UnLessDirective {

  private hasView = false;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {

  }

  @Input() set appUnLess(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    }
    if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
