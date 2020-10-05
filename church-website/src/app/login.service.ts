import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface Login{
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login: Login = {
    username: 'pastorDan',
    password: 'jesusIsLord1282'
  }
  editMode = new Subject<boolean>();
  modeController: boolean;
  info: Login;

  constructor() { }

  // checkInfo(info: Login){
  //   this.info = info
  //   if(this.info === this.login){
  //     this.editMode.next(true);
  //   }
  // }
  
  enterEditMode(enter: boolean){
    this.modeController = enter;
    this.editMode.next(this.modeController);
  }

  exitEditMode(exit: boolean){
    this.modeController = exit;
    this.editMode.next(this.modeController);
  }


}
