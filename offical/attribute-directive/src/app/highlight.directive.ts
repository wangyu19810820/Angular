import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input('appHighlight') highlightColor: string;
  @Input() defaultColor: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onmouseover() {
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onmouseouter() {
    this.el.nativeElement.style.backgroundColor = null;
  }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.defaultColor;
  }
}
