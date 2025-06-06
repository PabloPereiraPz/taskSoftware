import { Component } from '@angular/core';

@Component({
  selector: 'app-header', // O @Component é um decorator, aqui o selector é ele selecionando este componente para mostrar o que está em HEADER.HTML na tela.
  styleUrl: './header.component.css',
  templateUrl: './header.component.html', // aqui é o arquivo HTML que será mostrado na tela quando chamar o APP-HEADER.
  standalone: false,
})
export class HeaderComponent {}
