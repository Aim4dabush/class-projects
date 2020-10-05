import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-prayer-request',
  templateUrl: './prayer-request.component.html',
  styleUrls: ['./prayer-request.component.css']
})
export class PrayerRequestComponent implements OnInit {
  public requestForm: FormGroup;
  public phoneNumber: string;
  public number: string;
  public textStyle = {
    fontFamily: 'Lemonada, cursive'
  };

  constructor() { }

  ngOnInit() {
    this.requestForm = new FormGroup({
      'fName': new FormControl('', Validators.required),
      'lName': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'phone': new FormControl('', Validators.required),
      'requestInfo': new FormControl('', Validators.required),
      'detailRequest': new FormControl('', Validators.required)
    })
  }

  onSubmit(){
    console.log(this.requestForm.value);
  }
  

}
