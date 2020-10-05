import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OtherEvents } from 'src/app/other-events.module';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-edit-events',
  templateUrl: './edit-events.component.html',
  styleUrls: ['./edit-events.component.css']
})
export class EditEventsComponent implements OnInit {
  public eventsEditForm: FormGroup;
  public events: OtherEvents[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.otherEvents;

    this.eventService.otherEventChanges.subscribe(
      (event: OtherEvents[]) => {
        this.events = event
      }
    )

    this.eventsEditForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'address': new FormGroup({
        'street': new FormControl(null, Validators.required),
        'city': new FormControl(null, Validators.required),
        'zipcode': new FormControl(null, Validators.required),
        'addressLink': new FormControl(null, Validators.required)
      }),
      'time': new FormControl(null, Validators.required),
      'date': new FormControl(null, Validators.required),
      'info': new FormControl(null, Validators.required),
      'imagePath': new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    this.eventService.addOtherEvent(this.eventsEditForm.value)
    console.log(this.eventsEditForm.value)
  }

  onDelete(index: number){
    this.eventService.deleteOtherEvent(index);
  }
}
