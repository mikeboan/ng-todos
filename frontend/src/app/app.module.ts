import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppStateModule} from 'app/store/store.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
