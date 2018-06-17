import * as todosActions from "./todos.actions";
import {AppState} from "../app-state";
import {Action, Store} from "@ngrx/store";
import {TodosQuery} from "./todos.reducer";

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {delay, map, mergeMap, tap} from 'rxjs/operators';
import {ReceiveTodo} from "./todos.actions";

@Injectable()
export class TodosFacade {
  todos$ = this.store.select(TodosQuery.getTodos);

  @Effect()
  getTodos$: Observable<Action> = this.actions$.pipe(
    ofType<todosActions.RequestTodos>(todosActions.REQUEST_TODOS),
    delay(2000),
    mergeMap(() =>
      this.http.get('http://localhost:3000/todos.json').pipe(
        tap(console.log),
        map(data => ({ type: 'RECEIVE_TODOS', payload: data }))
      )
    )
  );

  @Effect()
  toggleTodo$: Observable<Action> = this.actions$.pipe(
    ofType<todosActions.ToggleTodo>(todosActions.TOGGLE_TODO),
    mergeMap((action) => {
      const { todo } = action.payload;
      const req$ = this.http.patch(`http://localhost:3000/todos/${todo.id}.json`, { complete: !todo.complete });
      return req$.pipe(
        tap(console.log),
        map(todo => new ReceiveTodo(todo))
      )
    })

  );

  constructor(private http: HttpClient, private actions$: Actions, private store: Store<AppState>) {}
}
