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

  removeToDo(id : number) {
    this.toDos = this.toDos
      .filter(t => t.id !== id)
  }

  getToDo(id : number | string) : Observable<any> {
    return this.http.get(this.url + '/' + id);
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

}

export interface ToDo {
  id : number;
  userId: number;
  title: string;
  completed: boolean;
}
