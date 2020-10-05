import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
})
export class LeadersComponent implements OnInit {
  public background = {
    backgroundImage: 'url(https://o06b5q.bn.files.1drv.com/y4mwv8Wqu2xlMjwabF49s1sZu24lCv4OgmRM1s0BeAQ4JBLYK0KnnBNL7zkHQrhfCXuUoIION3dDbAW63oG5xLi5wNUNXwmxIoJZ2J-egsR65psLEUIt0wGJSDZxDh3VOOUSGt7BVikO_ocALDkD84qlhcMTllK9rifi1uqvE0KIdX7GYWcz16nOvIIfC7kZtStGkmKYGuNf6pMeqYbeewPbA?width=1024&height=684&cropmode=none)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
  public textOnly = {
    fontFamily: 'Lemonada, cursive'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
