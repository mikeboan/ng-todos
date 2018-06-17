import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AppStateModule} from 'app/store/store.module';
import {TodosIndexComponent} from "./todos-index.component";
import {TodoItemComponent} from "./todo-item.component";


@NgModule({
  declarations: [
    TodosIndexComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppStateModule
  ],
  exports: [
    TodosIndexComponent
  ],
  providers: []
})
export class TodosModule { }
