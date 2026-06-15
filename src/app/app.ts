import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('enquiry_app');
  router = inject(Router);
  auth = inject(AuthService);

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/');
  }
}
