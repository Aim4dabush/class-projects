import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TodoList } from '../todoList.module';
import { TodoService } from '../todo.service';
import { CompleteService } from '../complete.service';

@Component({
  selector: 'app-active-list',
  templateUrl: './active-list.component.html',
  styleUrls: ['./active-list.component.css']
})
export class ActiveListComponent implements OnInit {
  taskLists: TodoList[]=[];
  username: string;
  formDesign = {
    backgroundColor: 'lightgray',
    border: '1px solid black',
    borderRadius: '.25rem',
    margin: '5px',
    padding: '5px',
    width: '80vw'
  };

  newBackground = {
    backgroundImage: 'url(https://i0.wp.com/thepointsguy.com/wp-content/uploads/2020/01/GettyImages-1095476474-scaled.jpg?fit=2560%2C1714px&ssl=1)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'calc(100vh - 56px)',
    position: 'fixed',
    overflow: 'auto',
    width: '100%'
  };
  
  taskStyle = {
    cursor:'pointer',
    color: 'blue'
  };

  constructor(private toDoService: TodoService,
              private completeService: CompleteService,
              private router: Router) { }

  ngOnInit() {
    //Get taskList from ToDoService
    this.taskLists = this.toDoService.sortByCompletionDate();
    
    //Subscribed to changes to taskList in ToDoService
    this.toDoService.changeTask.subscribe(
      (newList: TodoList[]) => {
        this.taskLists = newList;
      }
    )
  }

  //Sort taskLists by compeltion date, then start date, then a-z
  sortByCompletionDate(){
    this.taskLists = this.toDoService.sortByCompletionDate();
  }

  //Sort taskLists by start date, then completion date, then a-z
  sortByStartDate(){
    this.taskLists = this.toDoService.sortByStartDate();
  }

  //Send task to be edited in edit component
  onEdit(index: number){
    this.toDoService.setTaskToEdit(this.taskLists[index]);
    this.router.navigate(['edit', index]);
  }

  //Send completed task to completed component
  onComplete(index: number){
    this.completeService.addToCompletedList(this.taskLists[index]);
    this.toDoService.deleteTask(index);
  }

  //Delete task
  onDelete(index: number){
    this.toDoService.deleteTask(index);
  }

}
