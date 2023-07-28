import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { 
    this.initialize();
   }

  toDos! : ToDo[];

  getToDoList() : Observable<any> {
    return this.http.get(this.url);
  }

  getList() {
    return this.toDos;
  }

  async initialize() {
    let sync = await firstValueFrom(this.getToDoList())
      .then((data) => {
        this.toDos = data;
      });
  }

  // getToDo(id : number | string) : Observable<any> {
  //   return this.http.get(this.url + '/' + id);
  // }

  getTodo(id : number) : ToDo {
    let index = this.getIndex(id);
    return this.toDos[index];
  }

  createToDo(title: string, completed: boolean) : Observable<any> {
    let toDo = {
      userId : '2',
      title: title,
      completed: completed
    }
    return this.http.post(this.url, toDo);
  }

  modifyToDo(id : number | string, toDo : ToDo | undefined) {
    return this.http.put(this.url + '/' + id, toDo);
  }

  deleteToDo(id : number) : Observable<any>{
    return this.http.delete(this.url + '/' + id);
  }

  removeToDo(id : number) {
    this.toDos = this.toDos
      .filter(t => t.id !== id)
  }


  editToDo (todo : ToDo) : void {
    let index = this.getIndex(todo.id);
    this.toDos[index] = todo;
  } 

  addToDo(todo : ToDo) : void {
    let lastId = this.toDos[this.toDos.length - 1].id;
    todo.id = lastId + 1;
    this.toDos.push(todo);
  }

  getIndex(id : number) {
    let index = this.toDos
        .findIndex(t => t.id === id);
    return index;
  }

}

export interface ToDo {
  id : number;
  userId: number;
  title: string;
  completed: boolean;
}
