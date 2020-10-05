import { Injectable } from '@angular/core';
import { TodoList } from './todoList.module';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  changeTask = new Subject<TodoList[]>();
  task: TodoList;
  
  taskList: TodoList[]=[];

  constructor() { }

  //Get task from to-do-form
  addToActiveList(newTask: TodoList){
    this.taskList.push(newTask);
  }

  //Sort taskList by completion date, then start date, then a-z
  sortByCompletionDate(){
    return this.taskList.sort((a: any, b: any) => {
      if(a.completion > b.completion){
        return 1;
      }
      if(b.completion > a.completion){
        return -1;
      }
      if(a.today > b.today){
        return 1;
      }
      if(b.today > a.today){ 
        return -1
      }
      if(a.task > b.task){
        return 1;
      }
      if(b.task > a.task){
        return -1;
      }
    });
  }

  //Sort taskList by start date, then completion date, then a-z 
  sortByStartDate(){
    return this.taskList.sort((a: any, b: any) => {
      if(a.today > b.today){
        return 1;
      }
      if(b.today > a.today){
        return -1;
      }
      if(a.completion > b.completion){
        return 1;
      }
      if(b.completion > a.completion){
        return -1;
      }
      if(a.task > b.task){
        return 1;
      }
      if(b.task > a.task){ 
        return -1
      }
    });
  }

  //Get task from active component to edit
  setTaskToEdit(task: TodoList){
    this.task = task;
  }

  //Send to edit component to edit
  getTaskToEdit(){
    return this.task;
  }

  //Delete a task from active component
  deleteTask(index: number){
    this.taskList.splice(index, 1);
    this.changeTask.next(this.taskList.slice());
  }

  //Update taskList after done editing
  updateTask(index: number, updatedTask: TodoList){
    this.taskList[index] = updatedTask;
    
  }
}
