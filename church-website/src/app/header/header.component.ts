import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public menuCollapse: boolean = true;
  public editMode: boolean = false;
  public navbarStyle = {
    backgroundColor: '#e3f2fd',
    cursor: 'pointer',
    fontFamily: 'Handlee, cursive'
  };
  public brandStyle = {
    fontFamily: 'Lobster, cursive'
  };

  constructor(private loginService: LoginService) { }

  ngOnInit(){
    this.loginService.editMode.subscribe(
      (enter: boolean) => {
        this.editMode = enter;
      }
    );
  }

}
