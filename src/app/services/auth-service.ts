import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = signal<any>(JSON.parse(localStorage.getItem('auth') ?? 'null'));

  login(user: any) {
    localStorage.setItem('auth', JSON.stringify(user));
    this.currentUser.set(user);
  }

  logout() {
    this.currentUser.set(null);
    localStorage.removeItem('auth');
  }
}