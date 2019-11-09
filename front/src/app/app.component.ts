import { Component } from '@angular/core';

import { LogService } from './services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular8-course';
  logGroupSeen: string[] = [];

  constructor(private logService: LogService) {}

  // Ajoute un observable permettant de mettre à jour les logs
  ngOnInit() {
    this.logService.getLogs().subscribe((logGroupSeen) => {
      this.logGroupSeen = logGroupSeen;
    });
  }
}
