import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router para manejar redirecciones
import { LoggingService } from '../../services/logging.service';
import { LogService } from '../../services/log.service';
import { MatFormField, MatFormFieldControl, MatLabel } from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AuthGuard } from '../../guards/auth.guard';

@Component({
  selector: 'app-login',
  imports: [MatLabel, NgIf, MatFormField, FormsModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Ajuste para plural en styleUrls
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private router: Router, // Inyección del Router
    private loggingService: LoggingService,
    private logService: LogService,
    private authGuard: AuthGuard
  ) {}

  onSubmit() {
    // Verificación de credenciales
    if (this.username === 'admin' && this.password === 'password123') {
      alert('Login successful');
      this.logService.addLog('Login Successful', `User: ${this.username}`);
      this.authGuard.setAuthenticated(true); // Actualiza el estado de autenticación
      this.router.navigate(['/inicio']);
      } else {
      this.errorMessage = 'Invalid username or password';
      this.loggingService.logEvent('Failed login attempt', {
        username: this.username,
        timestamp: new Date(),
      });
      this.logService.addLog('Login Failed', `Attempted User: ${this.username} Usuario no
        registrado en la base de datos.`);
    }
  }
}
