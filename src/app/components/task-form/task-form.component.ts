import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {Router} from "@angular/router"
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnChanges{
  @Input('submit') submit : () => void = () => {};
  @Input('title') taskTitle: string | undefined; 
  @Input('completed') taskCompleted: boolean | undefined;

  constructor( private fb: FormBuilder, private router: Router) {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.title?.setValue(this.taskTitle);
    this.completed?.setValue(this.taskCompleted);
  }
 
  alert : boolean = false;

  onSubmit() {
    this.submit();
    this.alert = true;
    this.router.navigate(['/todolist']);
  }

  closeAlert() {
    this.alert = false;
  }

  taskForm = this.fb.group({
    title: [this!.taskTitle, Validators.required],
    completed: [this!.taskCompleted, ]
  })

  get title() {
    return this.taskForm.get('title');
  }

  get completed() {
    return this.taskForm.get('completed');
  }
}
