import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { List } from './list';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { 
    this.initialize();
   }

  fecthData! : Promise<any>

  getToDoList() : Observable<any> {
    return this.http.get(this.url);
  }

  getFetchData() {
    return this.fecthData;
  }

  initialize() {
    this.fecthData = firstValueFrom(this.getToDoList());
  }

  // getToDo(id : number | string) : Observable<any> {
  //   return this.http.get(this.url + '/' + id);
  // }

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
