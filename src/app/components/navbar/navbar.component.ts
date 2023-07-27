import { Component, OnInit } from '@angular/core';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  faPenToSquare = faPenToSquare;
  
  constructor() { }
}
