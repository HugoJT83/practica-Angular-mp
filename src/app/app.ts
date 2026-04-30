import { Component, signal } from '@angular/core';
import { Counter } from "./components/counter/counter";
import { TaskForm } from "./components/task-form/task-form";
import { TaskList } from "./components/task-list/task-list";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { Header } from "./components/header/header";
import { Task } from './Models/task.model';


@Component({
  selector: 'app-root',
  imports: [TaskForm, TaskList, FontAwesomeModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private nextId = 3;
  
  
    tasks = signal<Task[]>([ //valor inicial indicado con (); este caso es un array []
      {
        id: 1,
        title: 'Crear el proyecto',
        completed: true
      },
      {
        id: 2,
        title: 'Añadir componentes y servicios',
        completed: false
      }
    ]);
  
    addTask(title:string): void {
        const newTask: Task = {
          id: this.nextId++,
          title: title, // o poner solo title
          completed: false
        }
  
        this.tasks.update((currentTasks)=> [...currentTasks, newTask]);
    }
  
    toggleTask(id: number): void {
      this.tasks.update((currentTasks)=>
        currentTasks.map((task)=>
          (task.id) === id ? {...task, completed: !task.completed} : task)
      );
    };

}
