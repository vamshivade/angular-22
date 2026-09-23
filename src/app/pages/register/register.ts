import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private router = inject(Router);

  onRegister() {
    this.router.navigate(['/pages/login']);
  }

  onLogin() {
    this.router.navigate(['/pages/login']);
  }
}
