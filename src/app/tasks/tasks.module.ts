import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { NewTasksComponent } from './new-tasks/new-tasks.component';
import { TaskComponent } from './task/task.component';
import { ShareModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTasksComponent],
  exports: [TasksComponent, TaskComponent, NewTasksComponent],
  imports: [CommonModule, FormsModule, ShareModule]
})
export class TasksModule {}
