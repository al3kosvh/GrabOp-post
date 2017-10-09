import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
// TODO validate only input number
export class NumberInputComponent {

  @Output() onValue = new EventEmitter<any>();
  value: string;
  focus = false;

  constructor() {

  }

  onFocus() {
    this.focus = true;
  }

  onBlur() {
    this.focus = false;
    // TODO emit a number
    this.onValue.emit(this.value);
  }

}
