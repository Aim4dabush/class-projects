import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  username: string;
  toDoForm: FormGroup;
  checking: boolean;
  formDesign = {
    backgroundColor: 'lightgray',
    border: '1px solid black',
    borderRadius: '.25rem',
    padding: '5px',
    width: '600px'
  };
  newBackground = {
    backgroundImage: 'url(https://explore-us-uploads.imgix.net/wp-content/uploads/2017/12/1400AD-header_hawaii_1-original.jpg?auto=format&q=50)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'calc(100vh - 56px)',
    width: '100%'
  };

  constructor(private toDoService: TodoService,
              private router: Router) { }

  ngOnInit(){
    //FormGroup for reactive form
    this.toDoForm = new FormGroup({
      'task': new FormControl(null, [Validators.required]),
      'today': new FormControl(null, [Validators.required]),
      'completion': new FormControl(null, [Validators.required])
    })
  }

  //Submit form to ToDoService
  onSubmit(){
    this.toDoService.addToActiveList(this.toDoForm.value);
    this.router.navigate(['active']);
  }
}