import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupListComponent } from './group-list/group-list.component';
import { PagerComponent } from './pager/pager.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

import { GroupService } from './services/group.service';
import { LogService } from './services/log.service';

import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupEditComponent } from './group-edit/group-edit.component';
import { SwitchInputComponent } from './switch-input/switch-input.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupListComponent,
    PagerComponent,
    MenuComponent,
    HomeComponent,
    GroupDetailComponent,
    GroupEditComponent,
    SwitchInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    GroupService,
    LogService
  ],
  entryComponents: [
    GroupEditComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
