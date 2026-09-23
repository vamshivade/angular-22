import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private router = inject(Router);

  onLogin() {
    // Api call for login
    this.router.navigate(['/pages/home']);
  }

  onRegister() {
    this.router.navigate(['/pages/register']);
  }
}
