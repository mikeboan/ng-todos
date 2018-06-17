import {Action} from "@ngrx/store";
import {Todo} from "./todo.model";

export const REQUEST_TODOS = "REQUEST_TODOS";
export const RECEIVE_TODOS = "RECEIVE_TODOS";

export class RequestTodos implements Action {
  type = REQUEST_TODOS;
  constructor(public payload: any) {}
}

export class ReceiveTodos implements Action {
  type = RECEIVE_TODOS;
  constructor(public payload: Todo[]) {}
}


export type All
  = RequestTodos
  | ReceiveTodos;
