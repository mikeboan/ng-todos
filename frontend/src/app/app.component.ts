import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos$: Observable<any>;

  constructor(private http: Http) {}

  ngOnInit() {
    this.todos$ = this.http
      .get('http://localhost:3000/todos.json')
      .pipe(
        map( res => res.json())
      );
  }
}
