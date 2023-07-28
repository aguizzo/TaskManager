import { Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToDoService, ToDo } from 'src/app/services/to-do.service';

@Component({
  selector: 'to-do-table',
  templateUrl: './to-do-table.component.html',
  styleUrls: ['./to-do-table.component.css']
})
export class ToDoTableComponent implements OnInit {
  toDos : ToDo[] = [];
  faPen = faPen;
  faTrash = faTrash;
  idSelected = 0;


  constructor(private service: ToDoService) { }

  ngOnInit(): void {
    setTimeout(() =>{
      this.toDos = this.service.getList();
    }, 400);
    
  }

  selectId(id : number) {
    this.idSelected = id;
  }

  deleteToDo(id : number) {
    this.service.deleteToDo(id).subscribe();
    this.service.removeToDo(id);
    this.toDos = this.service.getList();
  }

  onDeleteAccept (id : number) {
    this.deleteToDo(id);
  };

}
