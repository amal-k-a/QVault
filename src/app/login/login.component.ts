import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private userService: UserService) {}

  onSubmit(): void {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@kristujayanti\.com$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;

    if (!emailPattern.test(this.email)) {
      alert('Only @kristujayanti.com emails are allowed');
      return;
    }

    if (!passwordPattern.test(this.password)) {
      alert(
        'Password must be at least 6 characters and include uppercase, lowercase, and special characters'
      );
      return;
    }

    this.userService.login(this.email, this.password).subscribe({
      next: (response: string) => {
        alert(response); // ✅ Will show: "Login was successfull\nstudent dashboard"
        console.log('Login success:', response);
      },
      error: (err: any) => {
        alert('Login failed');
        console.error('Login error:', err);
      }
    });
  }
}
