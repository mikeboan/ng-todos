import {NgModule} from '@angular/core';

import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {TodosFacade, todosReducer} from './todos';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  imports: [
    EffectsModule.forRoot([
      TodosFacade
    ]),
    StoreModule.forRoot({
      todos: todosReducer
    }),
    HttpClientModule
  ],
  providers: [
    TodosFacade
  ],
})
export class AppStateModule { }
