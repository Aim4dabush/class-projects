import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public footerStyle = {
    backgroundColor: '#e3f2fd',
    fontFamily: 'Handlee, cursive'
  };
  public footerHeight = {
    height: 'calc(100vh - 897px)'
  };
  public editMode: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(){
    this.loginService.editMode.subscribe(
      (enter: boolean) => {
        this.editMode = enter;
      }
    )
  }

}
