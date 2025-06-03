import {
  Component,
  Input,
  Output,
  EventEmitter,
  input,
  computed,
  output,
} from '@angular/core';
/*
type UserType = { // isso é um TYPE.
  id: string;
  avatar: string;
  name: string;
};

interface UserInterface{ // Isso é um interface
    id: string;
  avatar: string;
  name: string;
} */

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //  MÉTODO 1 ----------------------------------------------------

  @Input({ required: true }) user!: {
    // aqui só está colocado o ! porque a obrigatoriedade está com o required: true e o ! tira a obrigatoriedade.
    id: string;
    avatar: string;
    name: string;
  };

  @Output() select = new EventEmitter<string>();

  get ImagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  //  MÉTODO 2 ------------------------------------------------------------------------

  /*  avatar = input<string>(''); * método input no final que fala que o que ele vai receber é uma string, o '' é o valor inicial, uma string vazia. * 
      name = input<string>('');
      select = output<string>(); - * outro método para chamar *  

      magePath = computed(() => {
      return 'assets/users/' + this.avatar();
  }); */

  onSelectUser() {
    this.select.emit(this.user.id); // aqui estamos selecionando e emitindo um novo valor.
  }
}
