import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todolist:any=["Learn Web Development","Study for the Quiz","Driving Pracice","Cricket Practice"];
  constructor() { }
  public getlist()
  {
    return this.todolist;
  }
  public setlist(todo:any)
  {
    this.todolist.push(todo);
  }
}
