import { Component } from '@angular/core';

import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private logService: LogService) { }

  addMessageToLog() {
    this.logService.addLog(new Date(Date.now()).toLocaleString() + ' - Depuis la home');
  }
}
