import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupDetailComponent } from './components/group-detail/group-detail.component';
import { GroupListComponent } from './components/group-list/group-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: GroupListComponent
  },
  {
    path: 'view/:id',
    component: GroupDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
