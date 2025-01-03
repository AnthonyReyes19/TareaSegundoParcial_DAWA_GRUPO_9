import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  private logs: any[] = [];

  logEvent(event: string, details: any) {
    const log = { event, details };
    this.logs.push(log);
    console.log('Log recorded:', log);
    // Aquí podrías enviar los logs a un backend o sistema externo
  }

  getLogs() {
    return this.logs;
  }
}
