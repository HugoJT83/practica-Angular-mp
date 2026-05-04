import { Component, inject, input, output } from '@angular/core';
import { Task } from '../../Models/task.model';
import { TaskStoreServiceTs } from '../../services/task-store.service.ts';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
   taskStore = inject(TaskStoreServiceTs);

  task = input.required<Task>(); //señal para recibir de forma obligatoria del componente padre

  toggleTask():void{
    this.taskStore.toggleTask(this.task().id);
  }
}
