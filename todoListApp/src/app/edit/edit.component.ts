import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { TodoList } from 'src/app/todoList.module';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editTask: TodoList;
  index: number;
  editForm: FormGroup;
  formDesign = {
    backgroundColor: 'lightgray',
    border: '1px solid black',
    borderRadius: '.25rem',
    padding: '5px',
    width: '80vw'
  };
  newBackground = {
    backgroundImage: 'url(https://peakvisor.com/img/news/Hawaii-Kauai.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'calc(100vh - 56px)',
    width: '100%'
  };

  constructor(private todoService: TodoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    //Get task to edit from active component
    this.editTask = this.todoService.getTaskToEdit();

    //FormGroup for reactive form
    this.editForm = new FormGroup({
      'task': new FormControl(this.editTask.task, Validators.required),
      'today': new FormControl(this.editTask.today, Validators.required),
      'completion': new FormControl(this.editTask.completion, Validators.required)
    })

    //Get id number to set the index of taskList array in toDoService
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['id'];
      }
    )
  }

  //Submit edited task to ToDoService to update taskList
  onSubmit(){
    this.todoService.updateTask(this.index, this.editForm.value);
    this.router.navigate(['active']);
  }

}
