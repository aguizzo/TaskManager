import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {  }

  getToDoList() : Observable<any> {
    return this.http.get(this.url);
  }

  getToDo(id : number | string) : Observable<any> {
    return this.http.get(this.url + '/' + id);
  }

  createToDo(title: string, completed: boolean) : Observable<any> {
    let toDo = {
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
