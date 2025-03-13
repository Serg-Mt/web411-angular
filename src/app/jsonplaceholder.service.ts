import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  constructor(private http: HttpClient) { }
  getAllUsers() {
    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
