import { Component, OnInit } from '@angular/core';

import { Group } from '../models/group';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  groupDetail: Group | null = null;

  constructor() { }

  ngOnInit() {
  }

  showGroup(group: Group) {
    this.groupDetail = group;
  }

  hideGroup() {
    this.groupDetail = null;
  }

}
