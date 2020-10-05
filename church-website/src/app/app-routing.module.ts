import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BeliefsComponent } from './beliefs/beliefs.component';
import { LeadersComponent } from './leaders/leaders.component';
import { GivingComponent } from './giving/giving.component';
import { EventsComponent } from './events/events.component';
import { SongLyricsComponent } from './song-lyrics/song-lyrics.component';
import { PrayerRequestComponent } from './prayer-request/prayer-request.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { EditmodeComponent } from './editmode/editmode.component';
import { EditHomeComponent } from './editmode/edit-home/edit-home.component';
import { EditEventsComponent } from './editmode/edit-events/edit-events.component';
import { EditLyricsComponent } from './editmode/edit-lyrics/edit-lyrics.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'beliefs', component: BeliefsComponent},
  {path: 'leaders', component: LeadersComponent},
  {path: 'giving', component: GivingComponent},
  {path: 'events', component: EventsComponent},
  {path: 'song-lyrics', component: SongLyricsComponent},
  {path: 'request', component: PrayerRequestComponent},
  {path: 'administrator', component: AdministratorComponent},
  {path: 'editmode', component: EditmodeComponent, children: [
    {path: 'home', component: EditHomeComponent},
    {path: 'events', component: EditEventsComponent},
    {path: 'edit-lyrics', component: EditLyricsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
