import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'les2-inp',
  template: `
  <fieldset>
    <legend>Input Component</legend>
    <input [(ngModel)]="inp" />
    inp = {{inp}}
  </fieldset>
  `,
  imports: [FormsModule]
})
export class InpComponent {
  @Input() inp = '-default-';
}

@Component({
  selector: 'les2-inp-setter',
  template: `
  <fieldset>
    <legend>Input Setter</legend>
    <input [(ngModel)]="_inp" />
    _inp = {{_inp}}
  </fieldset>
  `,
  imports: [FormsModule]
})
export class InpComponentSetter {
  _inp = '-default-';
  @Input() set inp(val: string) {
    if (2 <= val.length && val.length <= 8)
      this._inp = val;
  }
}

@Component({
  selector: 'les2-out',
  template: `
  <fieldset>
    <legend>Output Component</legend>
    <input [(ngModel)]="val" />
    <button (click)="out.emit(val)">ok</button>
  </fieldset>
  `,
  imports: [FormsModule]
})
export class OutComponent {
  val = '-default-val';
  @Output() out = new EventEmitter();
}

@Component({
  selector: 'les2-two-way',
  template: `
  <fieldset>
    <legend>Two Way Component</legend>
    <input [(ngModel)]="tw"/><!--  tw={{tw}} -->
    <button (click)="twChange.emit(tw)">update</button>
  </fieldset>
  `,
  imports: [FormsModule]
})
export class TwoWayComponent {
  @Input() tw = '-default-';
  @Output() twChange = new EventEmitter();
}




@Component({
  // selector: 'app-lesson2',
  imports: [FormsModule, InpComponent, InpComponentSetter, OutComponent, TwoWayComponent],
  templateUrl: './lesson2.component.html',
  styleUrl: './lesson2.component.css'
})
export class Lesson2Component {
  parentProp = '_parent_';
  arr:string[] = [/* 'a', 'b', 'c' */];
  addItemToStart(item: string) {
    this.arr.unshift(item);
  }
  addItemToEnd(item: string) {
    this.arr.push(item);
  }
}
