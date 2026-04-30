import { Component, input, output} from '@angular/core';
import { Task } from '../../Models/task.model';
import { TaskItem } from "../task-item/task-item";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-task-list',
  imports: [TaskItem, FontAwesomeModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})

export class TaskList {
  faListCheck = faListCheck;
  tasks = input.required<Task[]>();

  taskToggled = output<number>();
}
