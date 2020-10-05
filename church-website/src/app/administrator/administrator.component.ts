import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../login.service';


@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(){
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    // this.loginService.checkInfo(this.loginForm.value);
    this.router.navigate(['editmode']);
    this.loginService.enterEditMode(true);
  }
}
