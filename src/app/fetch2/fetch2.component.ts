import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { JsonplaceholderService, type User } from '../jsonplaceholder.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fetch2',
  imports: [AsyncPipe],
  templateUrl: './fetch2.component.html',
  styleUrl: './fetch2.component.css'
})
export class Fetch2Component implements OnInit {
  users!: Observable<User[]>;
  constructor(private jsonplaceholder: JsonplaceholderService) { }
  ngOnInit() {
    this.users = this.jsonplaceholder.getAllUsers();
  }
}
