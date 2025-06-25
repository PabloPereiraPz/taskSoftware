import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from './tasks.component';
import { NewTasksComponent } from './new-tasks/new-tasks.component';
import { TaskComponent } from './task/task.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent,
    NewTasksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule {}
