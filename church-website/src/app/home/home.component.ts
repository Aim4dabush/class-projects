import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { GatheringEvent } from '../gathering-event.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public open: boolean;
  public events: GatheringEvent[];
  public textStyle = {
    fontFamily: 'Lemonada, cursive'
  };
  public box = {
    border: '1px solid blue',
    borderRadius: '.25rem',
    marginBottom: '8px'
  };
  

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.open = true;
    this.events = this.eventService.gatheringEvents;
  }

  onClick(close: boolean){
    this.open = close;
  }
}
