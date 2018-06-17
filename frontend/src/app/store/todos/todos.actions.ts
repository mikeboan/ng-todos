import {Action} from "@ngrx/store";
import {Todo} from "./todo.model";

export const REQUEST_TODOS = "REQUEST_TODOS";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export class RequestTodos implements Action {
  type = REQUEST_TODOS;
  payload?:any;
}

export class ReceiveTodos implements Action {
  type = RECEIVE_TODOS;
  constructor(public payload: Todo[]) {}
}

export class ToggleTodo implements Action {
  type = TOGGLE_TODO;
  payload: { todo: Todo };

  constructor(public todo: Todo) {
    this.payload = { todo };
  }
}

export class ReceiveTodo implements Action {
  type = RECEIVE_TODO;
  payload: { todo: Todo };

  constructor(public todo: Todo) {
    this.payload = { todo };
  }
}


export type All
  = RequestTodos
  | ReceiveTodos;
