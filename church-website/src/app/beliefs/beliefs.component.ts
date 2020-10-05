import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beliefs',
  templateUrl: './beliefs.component.html',
  styleUrls: ['./beliefs.component.css']
})
export class BeliefsComponent implements OnInit {
  public box = {
    border: '1px solid blue',
    borderRadius: '.25rem',
    marginBottom: '5px'
  };
  public imgSize = {
    height: '15px',
    width: '15px'
  };
  public rowImage = {
    backgroundImage: 'url(https://o049bg.bn.files.1drv.com/y4mlEav6vaJ0g7Gy-Sge-E2GMyIfojJxxEAdlN25pJBXnRXu127LOemNAc50K_N61gM-m8EqTlf71ZZW-DdoMDapyq6RNKvma5D8ZTmU6B52idmbHFj7RlLPXzUxzetbR57uGOGrwmkAyP5K2fw-jBOUBZTasak5ZMfzYAUaHzi6MUM2Cze8l2j0rwXzTqZSyzZtCaCBDQk1PoO4NXco_4anw?width=1280&height=853&cropmode=none)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh'
  }
  public textStyle = {
    fontFamily: 'Lemonada, cursive'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
