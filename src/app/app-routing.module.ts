import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskComponent } from './component/task/task/task.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path: 'todo', component: TodoComponent},
  {path: 'task', component: TaskComponent},
  {path: '', redirectTo: '/todo', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
