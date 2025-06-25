import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task/task.model';
import { Add } from './new-tasks/new-tasks.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor(private http: HttpClient) {}

  private apiBase = typeof window !== 'undefined' ? window.location.origin : '';

  getUserTasks(userId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiBase}/api/tasks?userId=${userId}`);
  }

  addTask(userId: string, taskData: Add): Observable<any> {
    return this.http.post(`${this.apiBase}/api/tasks`, { ...taskData, userId });
  }

  removeTask(id: string): Observable<any> {
    return this.http.delete(`${this.apiBase}/api/tasks/${id}`);
  }

  completeTask(taskId: string): Observable<any> {
    return this.http.patch(`${this.apiBase}/api/complete-task`, { id: taskId });
  }
}
