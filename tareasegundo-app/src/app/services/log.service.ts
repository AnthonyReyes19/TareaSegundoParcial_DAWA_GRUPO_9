import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private logs: { event: string; details: string }[] = [];

  addLog(event: string, details: string) {
    this.logs.push({ event, details });
    console.log(`Log added: ${event} - ${details}`);
  }

  getLogs() {
    return this.logs;
  }
}