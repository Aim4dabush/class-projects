import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ActiveListComponent } from './active-list/active-list.component';
import { CompletedListComponent } from './completed-list/completed-list.component';
import { EditComponent } from './edit/edit.component';
import { HeaderComponent } from './header/header.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveListComponent,
    CompletedListComponent,
    EditComponent,
    HeaderComponent,
    TodoFormComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
