import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-lista-obiektow',
  templateUrl: './lista-obiektow.component.html',
  styleUrls: ['./lista-obiektow.component.css']
})
export class ListaObiektowComponent {
  rzeczy = [
    "rzecz1",
    "rzecz2",
    "rzecz3",
    "rzecz4",
  ] 

  todos = [
    new Todo("nauka",new Date("2023-06-2"),10),
    new Todo("nauka mobilne",new Date("12.06.2023"),10),
    new Todo("nauka webowe",new Date("12.06.2023"),10),
    new Todo("nauka desktopowe",new Date("12.06.2023"),10),

  ]
  klikniete_todo?:Todo;
   modyfikuj(x:Todo):void {
    this.klikniete_todo = x;

  }
}
