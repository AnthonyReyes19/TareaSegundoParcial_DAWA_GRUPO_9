import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

// Define la clase del servicio de logging
export class LoggingService {
  // Array privado que almacenará todos los logs 
  private logs: any[] = [];

  // Método para registrar un nuevo evento
  // Recibe el nombre del evento y los detalles asociados
  logEvent(event: string, details: any) {
    // Crea un objeto log combinando el evento y sus detalles
    const log = { event, details };
    // Añade el log al array de logs
    this.logs.push(log);
    // Muestra el log en la consola del navegador para debugging y posterior muestra en una tabla
    console.log('Log recorded:', log);
  }

  // Método para obtener todos los logs almacenados
  getLogs() {
    return this.logs;
  }
}