import { Component, signal } from '@angular/core';
import { Counter } from "./components/counter/counter";
import { TaskForm } from "./components/task-form/task-form";
import { TaskList } from "./components/task-list/task-list";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { Header } from "./components/header/header";


@Component({
  selector: 'app-root',
  imports: [TaskForm, TaskList, FontAwesomeModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
