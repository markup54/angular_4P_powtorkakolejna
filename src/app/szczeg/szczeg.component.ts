import { Component,Input } from '@angular/core';
import { Todo } from '../lista-obiektow/todo';

@Component({
  selector: 'app-szczeg',
  templateUrl: './szczeg.component.html',
  styleUrls: ['./szczeg.component.css']
})
export class SzczegComponent {
  @Input() todoprzekazane?:Todo;
}
