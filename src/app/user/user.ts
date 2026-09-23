import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user = {
    id: 1,
    name: 'Vamshi',
    email: 'vamshi@example.com',
    age: 25,
  };

  constructor() {
    console.log(this.user);
  }
}
