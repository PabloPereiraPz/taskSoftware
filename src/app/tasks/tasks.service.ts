import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task/task.model';
import { Add } from './new-tasks/new-tasks.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor(private http: HttpClient) {}

  getUserTasks(userId: string): Observable<Task[]> {
    // Busca todas as tasks e filtra pelo userId
    return this.http.get<Task[]>('/api/tasks');
    // O filtro por userId pode ser feito no componente ou na API
  }

  addTask(userId: string, taskData: Add): Observable<any> {
    // Envia a task para a API
    return this.http.post('/api/tasks', { ...taskData, userId });
  }

  removeTask(id: string): Observable<any> {
    // remover
    return this.http.delete(`/api/tasks/${id}`);
  }

  completeTask(taskId: string): Observable<any> {
    // PATCH correto para /api/complete-task
    return this.http.patch('/api/complete-task', { id: taskId });
  }
}
