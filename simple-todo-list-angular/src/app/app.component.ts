import { Component } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-todo-list-angular';

  faTrashAlt = faTrashAlt;

  tarefa : String = "";

  tarefas : Array<String> = [
            "Tarefa 1",
            "Tarefa 2",
            "Tarefa 3"
            ];

  adicionar() {
    this.tarefas.push(this.tarefa);
    this.tarefa = "";
  }
}
