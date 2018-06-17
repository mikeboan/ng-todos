import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {RequestTodos, Todo, TodosFacade, ToggleTodo} from "./store/todos";
import {Store} from "@ngrx/store";
import {AppState} from "./store/app-state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos$: Observable<Todo[]> = this.todosService.todos$;

  constructor(private todosService: TodosFacade, private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new RequestTodos());
  }

  toggleComplete(todo: Todo) {
    this.store.dispatch(new ToggleTodo(todo))
  }
}
