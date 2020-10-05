import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsernameService } from '../username.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcomeForm: FormGroup;
  newBackground = {
    backgroundImage: 'url(https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/Homepage_Hero_042019v1.jpg?itok=JquDLD-V)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    margin: '0',
    width: '100vw'
  };
  formStyle = {
    backgroundColor: 'lightgray',
    padding: '5px',
    borderRadius: '.25rem'
  };

  constructor(private usernameService: UsernameService,
              private router: Router) { }

  ngOnInit() {
    this.welcomeForm = new FormGroup({
      'username': new FormControl(null, [Validators.required])
    })
  }

  //Submit username to UsernameService
  onSubmit(){
    this.usernameService.setUsername(this.welcomeForm.value.username, true);
    this.router.navigate(['form']);
  }

}
