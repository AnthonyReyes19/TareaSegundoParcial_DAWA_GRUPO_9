import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class LoggingService {
  // Array que almacenará todos los logs 
  private logs: any[] = [];

  // Método para registrar un nuevo evento
  logEvent(event: string, details: any) {
    const log = { event, details };
    // Añade el log al array de logs
    this.logs.push(log);
    console.log('Log recorded:', log);
  }

  // Método para obtener todos los logs almacenados
  getLogs() {
    return this.logs;
  }
}