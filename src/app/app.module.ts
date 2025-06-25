import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // importado quando trabalhamos com modules.
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  bootstrap: [AppComponent], // aqui é declarado o component que o angular vai iniciar a aplicação.
  declarations: [AppComponent, HeaderComponent, UserComponent], // aqui é declarado todos os componentes que trabalharam juntos, o appmodule é o centralizador. COMPONENTES STANDALONE: FALSE
  imports: [BrowserModule, DatePipe, FormsModule, HttpClientModule, SharedModule, TasksModule], // Componentes importados STANDALONE: TRUE
})
export class AppModule {}
