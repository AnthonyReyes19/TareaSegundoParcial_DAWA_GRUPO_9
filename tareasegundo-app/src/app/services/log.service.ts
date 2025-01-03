import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private storageKey = 'appLogs';
  private logsSubject = new BehaviorSubject<{ event: string; details: string; timestamp: Date }[]>([]);
  logs$ = this.logsSubject.asObservable();

  constructor() {
    // Cargar logs desde el localStorage al inicializar el servicio
    const loadedLogs = this.loadLogs();
    this.logsSubject.next(loadedLogs);
  }

  addLog(event: string, details: string) {
    const timestamp = new Date(); // Captura la fecha y hora actuales
    const newLog = { event, details,  timestamp};
    const currentLogs = this.logsSubject.getValue();
    const newLogs = [...currentLogs, newLog];
    this.logsSubject.next(newLogs);
    this.saveLogs(newLogs);
    console.log('Logs in service:', newLogs); // Confirmar estado actualizado
  }

  // Cargar logs desde localStorage
  private loadLogs(): { event: string; details: string; timestamp: Date }[] {
    const storedLogs = localStorage.getItem(this.storageKey);
    if (storedLogs) {
      // Reconstruir objetos Date desde las cadenas ISO
      return JSON.parse(storedLogs).map((log: any) => ({
        ...log,
        timestamp: new Date(log.timestamp), // Convertir cadena ISO a Date
      }));
    }
    return [];
  }


  // Guardar logs en localStorage
  private saveLogs(logs: { event: string; details: string; timestamp: Date }[]) {
    // Convertir objetos Date a cadenas ISO para serialización
    const serializableLogs = logs.map((log) => ({
      ...log,
      timestamp: log.timestamp.toISOString(),
    }));
    localStorage.setItem(this.storageKey, JSON.stringify(serializableLogs));
  }
}