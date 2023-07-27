import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ToDoTableComponent } from './components/to-do-table/to-do-table.component';
import { ToDoService } from './services/to-do.service';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { WarningComponent } from './components/warning/warning.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoTableComponent,
    ToDoListComponent,
    NavbarComponent,
    AddTaskComponent,
    WarningComponent,
    EditTaskComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
