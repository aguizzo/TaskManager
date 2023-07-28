import { Component, OnInit, ViewChild } from '@angular/core';
import { ToDo, ToDoService } from 'src/app/services/to-do.service';
import { TaskFormComponent } from '../task-form/task-form.component';
import { List } from 'src/app/services/list';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  @ViewChild(TaskFormComponent, {static : true}) public taskForm! : TaskFormComponent;
  list: any;

  constructor(private service: ToDoService) {  }

  submit = () : void => {
    const title = this.taskForm.title;
    const completed = this.taskForm.completed;

    if(title != null && completed != null)
      this.service.createToDo(title.value as string, completed.value as boolean)
        .subscribe(result => List.add(result as ToDo));
  }

}
