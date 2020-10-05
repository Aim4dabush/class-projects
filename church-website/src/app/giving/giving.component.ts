import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giving',
  templateUrl: './giving.component.html',
  styleUrls: ['./giving.component.css']
})
export class GivingComponent implements OnInit {
  public textStyle = {
    fontFamily: 'Lemonada, cursive'
  };
  public box = {
    border: '1px solid blue',
    borderRadius: '.25rem',
    marginTop: '3px'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
