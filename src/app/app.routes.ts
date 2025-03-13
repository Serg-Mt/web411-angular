import { Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Fetch1Component } from './fetch1/fetch1.component';
import { Fetch2Component } from './fetch2/fetch2.component';

export const routes: Routes = [
  { path: '', component: Child1Component },
  { path: 'les1', component: Lesson1Component },
  { path: 'les2', component: Lesson2Component },
  { path: 'fetch1', component: Fetch1Component },
  { path: 'fetch2', component: Fetch2Component }
];
