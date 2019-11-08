import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GroupListComponent } from './group-list/group-list.component';
import { PagerComponent } from './pager/pager.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

import { GroupService } from './services/group.service';

@NgModule({
  declarations: [
    AppComponent,
    GroupListComponent,
    PagerComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
