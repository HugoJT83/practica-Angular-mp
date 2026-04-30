import { computed, Injectable, signal } from '@angular/core';
import { Task } from '../Models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskStoreServiceTs {

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

    totalTasks = computed(()=> this.tasks().length);

    completedTasks = computed(()=> this.tasks().filter((task)=> task.completed).length);

    pendingTasks = computed(()=> this.totalTasks() - this.completedTasks());
  
    addTask(title:string): void {
        const cleanTitle = title.trim();

        if(!cleanTitle) return;

        const newTask: Task = {
          id: this.nextId++,
          title: cleanTitle, // o poner solo title
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
