import { Component } from '@angular/core';
import { LogService } from '../../services/log.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-logs',
  imports: [NgFor],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css'
})
export class LogsComponent {
  logs: { event: string; details: string }[] = [];

  constructor(private logService: LogService) {}

  ngOnInit() {
    this.logs = this.logService.getLogs();
  }
}
