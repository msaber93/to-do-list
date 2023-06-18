import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TaskModule } from './task/task.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LocalstorgeService } from './services/localstorge.service';
import { TodoComponent } from './todo/todo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NavbarComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    TaskModule
  ],
  providers: [LocalstorgeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
