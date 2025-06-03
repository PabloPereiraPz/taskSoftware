import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  imports: [],
  standalone: true,
})
export class TasksComponent {
  @Input({ required: true }) name!: string;

}
