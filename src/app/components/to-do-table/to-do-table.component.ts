import { Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToDoService, ToDo } from 'src/app/services/to-do.service';
import { List } from 'src/app/services/list';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'to-do-table',
  templateUrl: './to-do-table.component.html',
  styleUrls: ['./to-do-table.component.css']
})
export class ToDoTableComponent implements OnInit {
  toDos : ToDo[] = [];
  subject$ = new BehaviorSubject<ToDo[] | any>(null);
  faPen = faPen;
  faTrash = faTrash;
  idSelected = 0;

  constructor(private service: ToDoService) { }

  ngOnInit(): void {
    this.subject$ = this.service.getFetchData();
    this.subject$.subscribe(data => {
      if(data) {
        List.Instance(data);
        this.toDos = List.getList();
      }
    });
  }

  selectId(id : number) {
    this.idSelected = id;
  }

  deleteToDo(id : number) {
    this.service.deleteToDo(id).subscribe();
    List.remove(id);
    this.toDos = List.getList();
  }

  onDeleteAccept (id : number) {
    this.deleteToDo(id);
  };

}
