import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent{
  faTriangleExclamation = faTriangleExclamation;
  @Output() accept = new EventEmitter();

  constructor() { }

  onAccept() : void {
    this.accept.emit();
  }

}
