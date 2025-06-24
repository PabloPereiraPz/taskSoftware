import { Component, Input, OnInit } from '@angular/core';
import { Add } from './new-tasks/new-tasks.model';
import { TasksService } from './tasks.service';
import { Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  standalone: false,
})
export class TasksComponent implements OnInit {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  addingTask = false;
  selectedUserTasks: Task[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.tasksService.getUserTasks(this.userId).subscribe((tasks) => {
      this.selectedUserTasks = tasks.filter(
        (task: any) => task.userId === this.userId
      );
    });
  }

  newTask(taskData: Add) {
    // Recebe taskData do formulário
    this.tasksService.addTask(this.userId, taskData).subscribe((newTask) => {
      this.selectedUserTasks.push(newTask);
      this.addingTask = false;
    });
  }

  cancelandoTask() {
    this.addingTask = false;
    this.loadTasks();
  }

  taskComplete(taskId: string) {
    this.tasksService.completeTask(taskId).subscribe(() => {
      this.loadTasks();
    });
  }

  trackByTaskId(index: number, task: any) {
    return task.id;
  }
}