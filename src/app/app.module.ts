import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // importado quando trabalhamos com modules.
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { Card } from './shared/card/card.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTasksComponent } from './tasks/new-tasks/new-tasks.component';

@NgModule({
  bootstrap: [AppComponent], // aqui é declarado o component que o angular vai iniciar a aplicação.
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    Card,
    TasksComponent,
    TaskComponent,
    NewTasksComponent,
  ], // aqui é declarado todos os componentes que trabalharam juntos, o appmodule é o centralizador. COMPONENTES STANDALONE: FALSE
  imports: [BrowserModule, DatePipe, FormsModule], // Componentes importados STANDALONE: TRUE
})
export class AppModule {}
