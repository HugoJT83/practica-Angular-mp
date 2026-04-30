import { Injectable, signal } from '@angular/core';
import { Task } from '../Models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

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
