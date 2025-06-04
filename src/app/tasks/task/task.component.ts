import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { Card } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  imports: [Card, DatePipe],
  standalone: true
})
export class TaskComponent {
  @Input({ required: true }) task!: Task; // informo que ele recebera dados do tipo interface Task alocado la no topo.
  @Output() complete = new EventEmitter<string>();

  taskComplete() {
    this.complete.emit(this.task.id);
  }
}
