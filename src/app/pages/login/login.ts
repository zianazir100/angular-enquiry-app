import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  router = inject(Router);
  auth = inject(AuthService);

  loginObj: any = {
    username: '',
    password: '',
  };

  attemptLogin() {
    if (this.loginObj.username == 'admin' && this.loginObj.password == 'admin') {
      alert('Login Successfull');
      this.auth.login(this.loginObj);
      this.router.navigateByUrl('/enquiry-list');
    } else {
      alert('Invalid Login Credentials');
    }
  }
}
