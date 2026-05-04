import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalculator, faCircleCheck, faList, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  faPlus = faPlus;
  faList = faList;
  faCircleCheck = faCircleCheck;
  faCalculator= faCalculator;


  platform = signal('Desconocido');

  async loadPlatform() {
    const result = await window.electronAPI.getPlatform();
    this.platform.set(result);
  }
}
