import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { LogService } from '../../services/log.service';
import { Subscription } from 'rxjs';
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-logs',
  imports: [NgFor,DatePipe],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css'
})
export class LogsComponent implements OnInit, OnDestroy {
  logs: {
timestamp: Date; event: string; details: string 
}[] = [];
  private logsSubscription!: Subscription;

  constructor(private logService: LogService) {}

  ngOnInit() {
    // Suscribirse al observable para recibir actualizaciones en tiempo real
    this.logsSubscription = this.logService.logs$.subscribe((logs) => {
      console.log('Logs recibido en el componente:', logs); // Verifica los datos recibidos
      this.logs = logs;
    });  
  }
  ngOnDestroy() {
    if (this.logsSubscription) {
      this.logsSubscription.unsubscribe();
    }
  }
  
}
