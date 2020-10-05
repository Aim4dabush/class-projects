import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { GatheringEvent } from 'src/app/gathering-event.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.css']
})
export class EditHomeComponent implements OnInit {
  public gatherings: GatheringEvent[] = [];
  public homeEditForm: FormGroup;

  constructor(private eventService: EventService) { }

  ngOnInit(){
    this.gatherings = this.eventService.getGatheringEvent();

    this.eventService.gatheringChanges.subscribe(
      (gatherings: GatheringEvent[]) => {
        this.gatherings = gatherings;
      }
    )

    this.homeEditForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'time': new FormControl(null, Validators.required),
      'contact': new FormControl(null, Validators.required),
      'info': new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    this.eventService.addGatheringEvent(this.homeEditForm.value);
  }

  onDelete(index: number){
    this.eventService.deleteGatheringEvent(index);
  }

}
