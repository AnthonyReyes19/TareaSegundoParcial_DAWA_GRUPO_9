import { Component, NgModule } from '@angular/core';
import { LoggingService } from '../../services/logging.service';
import { MatFormField, MatFormFieldControl, MatLabel } from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LogService } from '../../services/log.service';


@Component({
  selector: 'app-login',
  imports: [MatLabel, NgIf, MatFormField, FormsModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private loggingService: LoggingService, private logService: LogService) {}

  onSubmit() {
    if (this.username === 'admin' && this.password === 'password123') {
      alert('Login successful');
      this.logService.addLog('Login Successful', `User: ${this.username}`);
    } else {
      this.errorMessage = 'Invalid username or password';
      this.loggingService.logEvent('Failed login attempt', {
        username: this.username,
        timestamp: new Date(),
      });
      this.logService.addLog('Login Failed', `Attempted User: ${this.username}`);
      
    }
  }
}
