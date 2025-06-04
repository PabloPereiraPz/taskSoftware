import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Add } from './new-tasks.model';

@Component({
  selector: 'app-new-tasks',
  templateUrl: './new-tasks.component.html',
  styleUrls: ['./new-tasks.component.css'],
  imports: [FormsModule],
})
export class NewTasksComponent {
  @Output() cancelando = new EventEmitter<void>();
  @Output() adicionando = new EventEmitter<Add>();
  tituloAdicionado = '';
  summaryAdicionado = '';
  dataAdicionada = '';

  cancelandoTask() {
    this.cancelando.emit();
  }

  onSubmit() {
    this.adicionando.emit({
      title: this.tituloAdicionado,
      summary: this.summaryAdicionado,
      date: this.dataAdicionada,
    });
  }
}
