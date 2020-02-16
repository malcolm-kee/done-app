import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type = 'button';
  @Input() classes: string;
  @Input() isLoading = false;
  @Output() invoke = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClick(ev) {
    this.invoke.emit(ev);
  }
}
