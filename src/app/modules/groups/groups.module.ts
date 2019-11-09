import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { GroupsRoutingModule } from './groups-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';

import { GroupListComponent } from './components/group-list/group-list.component';
import { GroupDetailComponent } from './components/group-detail/group-detail.component';
import { GroupEditComponent } from './components/group-edit/group-edit.component';

@NgModule({
  declarations: [
    GroupListComponent,
    GroupDetailComponent,
    GroupEditComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    GroupsRoutingModule,
    SharedModule,
    ModalModule.forRoot(),
  ],
  entryComponents: [
    GroupEditComponent
  ],
})
export class GroupsModule { }
