import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  title = '';
  taskCreated = output<string>();

  addTask(): void{
    const cleanTitle = this.title.trim();

    if(!cleanTitle) return; //comprueba que haya algo escrito

    this.taskCreated.emit(cleanTitle);  
    this.title = '';
  }
}
