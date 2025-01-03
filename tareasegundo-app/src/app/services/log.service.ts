import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private storageKey = 'appLogs';
  private logsSubject = new BehaviorSubject<{ event: string; details: string }[]>(this.loadLogs());
  logs$ = this.logsSubject.asObservable();


  addLog(event: string, details: string) {
    const newLog = { event, details };
    const currentLogs = this.logsSubject.getValue();
    const newLogs = [...currentLogs, newLog];
    this.logsSubject.next(newLogs);
    this.saveLogs(newLogs);
    console.log('Logs in service:', newLogs); // Confirmar estado actualizado
  }

  // Cargar logs desde LocalStorage
  private loadLogs(): { event: string; details: string }[] {
    const storedLogs = localStorage.getItem(this.storageKey);
    return storedLogs ? JSON.parse(storedLogs) : [];
  }

  // Guardar logs en LocalStorage
  private saveLogs(logs: { event: string; details: string }[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(logs));
  }
}