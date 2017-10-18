import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-simple-input',
  templateUrl: './simple-input.component.html',
  styleUrls: ['./simple-input.component.css']
})

export class SimpleInputComponent {

  @Output() onValue = new EventEmitter<any>();
  @Input() value: any;
  focus = false;

  constructor() {

  }

  onFocus() {
    this.focus = true;
  }

  onBlur() {
    this.focus = false;
  }

  onChange() {
    this.focus = false;
    this.value = this.value.toString().trim();
    this.onValue.emit(this.value);
  }

}
