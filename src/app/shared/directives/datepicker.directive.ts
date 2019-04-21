import { Directive, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDatepicker]'
})
export class DatepickerDirective implements OnInit {
  @Output() public change = new EventEmitter();

  ngOnInit(): void {
    $(this.elementRef.nativeElement).datepicker({
      dateFormat: 'mm/dd/yy',
      changeYear: true,
      yearRange: '-100:+0',
      onSelect: (dateText) => {
        this.change.emit(dateText);
      }
    });
  }

  constructor(private elementRef: ElementRef) { }

}
