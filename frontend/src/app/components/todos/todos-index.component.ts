import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {RequestTodos, Todo, TodosFacade, ToggleTodo} from "../../store/todos";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app-state";

@Component({
  selector: 'app-todos-index',
  templateUrl: './todos-index.component.html',
})
export class TodosIndexComponent implements OnInit {
  todos$: Observable<Todo[]> = this.todosService.todos$;

  constructor(private todosService: TodosFacade, private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new RequestTodos());
  }
}
