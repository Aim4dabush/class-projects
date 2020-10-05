import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { ActiveListComponent } from './active-list/active-list.component';
import { CompletedListComponent } from './completed-list/completed-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'form', component: TodoFormComponent },
  { path: 'active', component: ActiveListComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'complete', component: CompletedListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
