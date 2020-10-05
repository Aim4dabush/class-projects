import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editmode',
  templateUrl: './editmode.component.html',
  styleUrls: ['./editmode.component.css']
})
export class EditmodeComponent implements OnInit {
  public isMenuCollapsed = true;
  public pass: boolean;

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(){
    this.loginService.editMode.subscribe(
      (pass: boolean) => {
        this.pass = pass;
      }
    )
  }

  onClick(){
    this.loginService.exitEditMode(false);
    this.router.navigate(['home']);
  }

}
