import { Component } from '@angular/core';
import { dataUsers } from './dataUsers';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false,
})
export class AppComponent {
  title = 'angular-complete-2025';
  selectedUserId?: string;

  user = dataUsers; // aqui estamos importando o dataUser para dentro do appComponent pra conseguir utilizar eles.

  get selectedUser() {
    return this.user.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
