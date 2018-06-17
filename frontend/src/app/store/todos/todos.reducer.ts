import * as todoActions from './todos.actions';
import {AppState} from "../app-state";

export type Action = todoActions.All;


export namespace TodosQuery {
  export const getTodos = (state: AppState) => Object.values(state.todos);
}


export function todosReducer(state = {}, action: Action) {

  switch (action.type) {

    case todoActions.RECEIVE_TODOS:
      const newTodos = action.payload.reduce((accum, todo) => {
        accum[todo.id] = todo;
        return accum;
      }, {});
      return { ...state, ...newTodos };

    case todoActions.RECEIVE_TODO:
      const { todo } = action.payload;
      return { ...state, [todo.id]: todo };

    default:
      return state;

  }
}
