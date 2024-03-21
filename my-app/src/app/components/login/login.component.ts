import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule],
  standalone: true,
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  login(): void {
    // Implement your login logic with AuthService
    // For now, we'll assume the login is successful
    this.authService.login(this.username, this.password).subscribe({
      next: (success) => {
        if (success) {
          this.router.navigate(['/']); // Redirect to home on success
        } else {
          // Handle login failure (e.g., show an error message)
        }
      },
      error: (error) => {
        // Handle error scenario
        console.error('Login error:', error);
      },
    });
  }
}
