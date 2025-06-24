import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false,
})
export class AppComponent implements OnInit {
  title = 'angular-complete-2025';
  selectedUserId?: string;
  users: User[] = [];  // Tipando corretamente como User[]

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<User[]>('/api/users').subscribe({
      next: (data) => {
        console.log('Usuários carregados do backend', data);
        this.users = data;
      },
      error: (err) => {
        console.error('Erro ao carregar usuários:', err);
      },
    });
  }

  get selectedUser(): User | null {
    return this.users.find((user) => user.id === this.selectedUserId) || null;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
