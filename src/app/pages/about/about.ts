import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextStyle } from '../../text-style';

@Component({
  selector: 'app-about',
  imports: [CommonModule, TextStyle],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  isActive = true;
  // isActive = false;

  textColor1 = 'Blue';
  textColor2 = 'Brown';

  // isLoggedIn = true;
  isLoggedIn = false;

  // users = ['John', 'Vamshi', 'Pasha', 'Bob', 'Prakash'];
  users = [];

  // status = 'active';
  // status = 'inactive'
  status = 'not-found'
}
