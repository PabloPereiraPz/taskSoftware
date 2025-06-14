import { Component, Input, Output } from '@angular/core';
import { Add } from './new-tasks/new-tasks.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  standalone: false,
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  addingTask = false;
  private tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  newTask() {
    this.addingTask = true;
  }

  cancelandoTask() {
    this.addingTask = false;
  }

  taskComplete(taskId: string) {
    this.tasksService.completeTask(taskId);
  }
}
