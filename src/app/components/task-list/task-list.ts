import { Component, inject} from '@angular/core';
import { TaskItem } from "../task-item/task-item";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import { TaskStoreServiceTs } from '../../services/task-store.service.ts';
@Component({
  selector: 'app-task-list',
  imports: [TaskItem, FontAwesomeModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})

export class TaskList {
  
  taskStore = inject(TaskStoreServiceTs);

  faListCheck = faListCheck;
  
}
