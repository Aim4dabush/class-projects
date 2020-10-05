import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {
  username: string;
  usernameEntered: boolean = false;
  usernameValid = new Subject<boolean>();

  constructor() { }

  //Set username after it is inputed
  setUsername(name: string, valid: boolean){
    this.username = name;
    this.usernameEntered = valid;
    this.usernameValid.next(valid);
  }

  getUsername(){
    return this.username;
  }

  checkForUsername(){
    return this.usernameEntered;
  }
}
