import { Injectable } from '@angular/core';
import { TodoList } from './todoList.module';

@Injectable({
  providedIn: 'root'
})
export class CompleteService {
  completedList: TodoList[] = [];
  newList: [] = [];

  constructor() { }

  //Get the completed task from active component
  addToCompletedList(task: TodoList){
    this.completedList.push(task)
  }

  //Send completedList to completed component
  getList(){
    return this.completedList.slice();
  }
}
