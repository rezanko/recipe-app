import {Directive, ElementRef, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{

  @HostBinding('class.open') isDropdownOpened = false;

  constructor(private elementRef: ElementRef) { }

  @HostListener('mousedown') toggleOpen(eventData: Event){
    this.isDropdownOpened = !this.isDropdownOpened;
  }
}
