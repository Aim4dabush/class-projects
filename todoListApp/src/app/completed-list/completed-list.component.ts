import { Component, OnInit } from '@angular/core';

import { TodoList } from '../todoList.module';
import { CompleteService } from '../complete.service';

@Component({
  selector: 'app-completed-list',
  templateUrl: './completed-list.component.html',
  styleUrls: ['./completed-list.component.css']
})
export class CompletedListComponent implements OnInit {
  completedLists: TodoList[] = []
  username: string;
  myDate = new Date;
  formDesign = {
    backgroundColor: 'lightgray',
    backgroundAttachment: 'scroll',
    border: '1px solid black',
    borderRadius: '.25rem',
    padding: '5px',
    width: '80vw'
  };
  newBackground = {
    backgroundImage: 'url(https://www.trevellers.com/wp-content/uploads/2015/05/Haiku-Stairs-Hawaii-Cr-SaraMak.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'calc(100vh - 56px)',
    overflow: 'auto',
    position: 'fixed',
    width: '100%'
  };

  constructor(private completeService: CompleteService) { }

  ngOnInit() {
    //Get completedList from CompleteService
    this.completedLists = this.completeService.completedList;  
  }

  //Clear completedList
  onClear(){
    this.completedLists.length = 0;
  }
}
