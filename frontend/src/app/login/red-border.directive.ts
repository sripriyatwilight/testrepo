import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appRedBorder]'
})
export class RedBorderDirective implements OnInit {
  @Input() appRedBorder!: boolean;

  constructor(private el: ElementRef, private control: NgControl) { }

  ngOnInit() {
    // this.control.statusChanges.subscribe(() => {
      this.updateBorder();
    // });
  }

  private updateBorder() {
    const hasError = this.control.invalid && (this.control.invalid || this.appRedBorder);
    this.el.nativeElement.style.borderBottomColor = hasError ? 'red' : '';
  }
}
