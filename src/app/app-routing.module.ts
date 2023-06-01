import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { NewTaskComponent } from './task/new-task/new-task.component';
import { TableTasksComponent } from './task/table-tasks/table-tasks.component';
import { DetailesComponent } from './task/detailes/detailes.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: '', redirectTo: '/todo', pathMatch: 'full'},
  {path: 'todo', component: TodoComponent},
  {path: 'new-task', component: NewTaskComponent},
  {path: 'table-task', component: TableTasksComponent},
  {path: 'detailes', component: DetailesComponent},
  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
