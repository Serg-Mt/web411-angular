import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-fetch1',
  imports: [],
  templateUrl: './fetch1.component.html',
  styleUrl: './fetch1.component.css'
})
export class Fetch1Component implements OnInit {
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data: any) => {
        console.log('data=', data);
        this.users = data;
      });
  }

  users: User[] = [];
}
