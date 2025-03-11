import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
  // selector: 'app-lesson1',
  imports: [FormsModule, CommonModule],
  templateUrl: './lesson1.component.html',
  styleUrl: './lesson1.component.css'
})
export class Lesson1Component {
  name = 'Angular';
  val = '-default-';
  items = ['Tom', 'Bob', 'Sam', 'Bill'];
  today = new Date();
  PI = Math.PI;


  condition: boolean = false;
  toggleCondition() {
    this.condition = !this.condition;
  }
}
