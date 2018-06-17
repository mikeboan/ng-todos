import * as todosActions from "./todos.actions";
import {AppState} from "../app-state";
import {Action, Store} from "@ngrx/store";
import {TodosQuery} from "./todos.reducer";

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {map, mergeMap, tap} from 'rxjs/operators';

@Injectable()
export class TodosFacade {
  todos$ = this.store.select(TodosQuery.getTodos);

  @Effect()
  getTodos$: Observable<Action> = this.actions$.pipe(
    ofType<todosActions.RequestTodos>(todosActions.REQUEST_TODOS),
    mergeMap(() =>
      this.http.get('http://localhost:3000/todos.json').pipe(
        tap(console.log),
        map(data => ({ type: 'RECEIVE_TODOS', payload: data }))
      )
    )
  );


  constructor(private http: HttpClient, private actions$: Actions, private store: Store<AppState>) {}
}
