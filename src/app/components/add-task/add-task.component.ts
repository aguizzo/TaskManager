import { Component, OnInit, ViewChild } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  @ViewChild(TaskFormComponent, {static : true}) public taskForm! : TaskFormComponent;

  constructor(private service: ToDoService) {}

  submit = () : void => {
    const title = this.taskForm.title;
    const completed = this.taskForm.completed;

    if(title != null && completed != null)
      this.service.createToDo(title.value as string, completed.value as boolean)
        .subscribe(result => console.log(result));
  }

}
