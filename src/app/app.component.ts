import { Component } from '@angular/core';
// import { Child1Component } from './child1/child1.component';
// import { Lesson1Component } from './lesson1/lesson1.component';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet,/*  Child1Component, Lesson1Component */],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web411-angular';
}
