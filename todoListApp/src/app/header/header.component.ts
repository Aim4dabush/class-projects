import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../username.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public usernameEntered: boolean = false;
  public menuCollapse: boolean = true;
  public username: string;
  public navBarLinkStyle = {
    cursor: 'pointer',
    color: 'white'
  }

  constructor(private usernameService: UsernameService) { }

  ngOnInit(){

    //Subscribe to UsernameService to check if there was an username entered and get username
    this.usernameService.usernameValid.subscribe(
      (valid: boolean) => {
        this.usernameEntered = valid;
        if(this.usernameEntered){
          this.username = this.usernameService.getUsername();
        }
      }
    )
  }

  onLogout(){
    this.menuCollapse = true;
    this.usernameEntered = false;
  }
}
