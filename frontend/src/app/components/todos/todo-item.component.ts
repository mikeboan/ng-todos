import {Component, Input} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app-state";
import {Todo, ToggleTodo} from "../../store/todos";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input()
  todo: Todo;

  showComments = false;

  constructor(private store: Store<AppState>) {}

  toggleComplete(todo: Todo) {
    this.store.dispatch(new ToggleTodo(todo))
  }
}
