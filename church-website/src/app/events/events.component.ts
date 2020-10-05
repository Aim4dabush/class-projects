import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public box = {
    border: '1px solid blue',
    borderRadius: '.25rem',
    marginBottom: '8px'
  }
  public textStyle = {
    fontFamily: 'Lemonada, cursive'
  };
  public events: any;


  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.otherEvents
  }

}
