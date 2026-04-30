import { Component } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { Header } from "./components/header/header";
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-root',
  imports: [ FontAwesomeModule, Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
