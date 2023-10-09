import { Component, OnInit, ViewChild } from '@angular/core';
import { ToDo, ToDoService } from 'src/app/services/to-do.service';
import { TaskFormComponent } from '../task-form/task-form.component';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/services/list';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @ViewChild(TaskFormComponent, {static : true}) public taskForm! : TaskFormComponent;
  toDo?: ToDo;

  constructor(private service: ToDoService, private route: ActivatedRoute) {}


  ngOnInit(): void {
    let id : string = "";
    this.route.paramMap
      .subscribe(params => id = params.get('id') as string);
    this.toDo = List.getTodo(+id);
    // this.service.getToDo(id).subscribe(
    //   data => {
    //     this.toDo = data;
    //   } 
    // );
  }

  submit = () : void => {
    const title = this.taskForm.title;
    const completed = this.taskForm.completed;

    if(title != null && completed != null) {
      const id = this.toDo?.id;
      let edited = this.toDo;
      edited!.title = this.taskForm.title?.value as string;
      edited!.completed = this.taskForm.completed?.value as boolean;

      this.service.modifyToDo(id!, this.toDo)
        .subscribe(result => List.edit(result as ToDo));
      }
  }

}
