import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { Add } from './new-tasks.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-tasks',
  templateUrl: './new-tasks.component.html',
  styleUrls: ['./new-tasks.component.css'],
  standalone: false,
})
export class NewTasksComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  tituloAdicionado = '';
  summaryAdicionado = '';
  dataAdicionada = '';

  private tasksSerivce = inject(TasksService);

  cancelandoTask() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksSerivce
      .addTask(this.userId, {
        title: this.tituloAdicionado,
        summary: this.summaryAdicionado,
        dueDate: this.dataAdicionada,
      })
      .subscribe(() => {
        this.close.emit();
      });
  }
}
