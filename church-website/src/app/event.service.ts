import { Injectable } from '@angular/core';
import { GatheringEvent } from './gathering-event.module';
import { OtherEvents } from './other-events.module';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  public gatheringEvents: GatheringEvent[] = [
    {
      title: 'Tuesday Night Bible Study',
      time: '7PM - 8PM',
      contact: 'citychurchstocton@gmail.com for zoom link.',
      info: 'Join in fellowship with the city church family and find out what gifts the Lord has for you.'
    },
    {
      title: 'Wow Wednesday',
      time: '7PM - 8PM',
      contact: 'citychurchstocton@gmail.com for zoom link.',
      info: 'Join in fellowship with the city church family and here how the Lord has made us go WOW this week!'
    }
  ];
  public otherEvents: OtherEvents[] = [
    {
      title: 'Outreach 55',
      imagePath: 'https://pk6ipq.bn.files.1drv.com/y4m5VadvwmTXnMgzhF9JQOV_3CfwSfPC2qKIhh52x6SAkGqo5caBKx-N0o5_bToCKiCC-5k9hDvsJQE6M-ruacIsNUXWesTBJnVTSsdJ_zfZ8Kg4Q-DgWChXrd4zQBAfimVCUGZTtMETAzZbIAlQiX1Lep2KWQa2-7_CLlmfNgPid6t5-iN4VeFiq4UkTrnU9X2pFuIqF4phk7ys2KCc1GhHw?width=660&height=371&cropmode=none',
      address: {
        street: '1282 E. Bianch Rd',
        city: 'Stockton, CA',
        zipcode: '95210',
        addressLink: 'https://goo.gl/maps/5eMqmC8jmG8mcJdJ9'
      },
      time: '10am - 1pm',
      date: '3rd Saturday of every month',
      info: 'As a church family we serve the Community of Stockton with non-perishiable foods, clothing, and prayer'
    }
  ];
  public gatheringChanges = new Subject<any>();
  public otherEventChanges = new Subject<any>();

  constructor() { }

  getGatheringEvent(){
    return this.gatheringEvents;
  }

  getOtherEvent(){
    return this.otherEvents;
  }

  addGatheringEvent(event: GatheringEvent){
    this.gatheringEvents.push(event);
  }

  addOtherEvent(event: OtherEvents){
    this.otherEvents.push(event);
  }

  deleteGatheringEvent(index: number){
    this.gatheringEvents.splice(index, 1);
    this.gatheringChanges.next(this.gatheringEvents.slice())
  }

  deleteOtherEvent(index: number){
    this.otherEvents.splice(index, 1);
    this.otherEventChanges.next(this.otherEvents.slice())
  }
}
