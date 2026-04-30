import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  private taskService = inject(TaskService);

  title = '';

  addTask(): void{
    const cleanTitle = this.title.trim();

    if(!cleanTitle) return; //comprueba que haya algo escrito

    this.taskService.addTask(cleanTitle);
    this.title = '';
  }
}
