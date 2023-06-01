import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { TableTasksComponent } from './table-tasks/table-tasks.component';
import { DetailesComponent } from './detailes/detailes.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewTaskComponent,
    TableTasksComponent,
    DetailesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TaskModule { }
