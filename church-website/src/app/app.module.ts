import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BeliefsComponent } from './beliefs/beliefs.component';
import { LeadersComponent } from './leaders/leaders.component';
import { GivingComponent } from './giving/giving.component';
import { EventsComponent } from './events/events.component';
import { SongLyricsComponent } from './song-lyrics/song-lyrics.component';
import { FooterComponent } from './footer/footer.component';
import { PrayerRequestComponent } from './prayer-request/prayer-request.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdministratorComponent } from './administrator/administrator.component';
import { EditmodeComponent } from './editmode/editmode.component';
import { EditHomeComponent } from './editmode/edit-home/edit-home.component';
import { EditEventsComponent } from './editmode/edit-events/edit-events.component';
import { EditLyricsComponent } from './editmode/edit-lyrics/edit-lyrics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BeliefsComponent,
    LeadersComponent,
    GivingComponent,
    EventsComponent,
    SongLyricsComponent,
    FooterComponent,
    PrayerRequestComponent,
    AdministratorComponent,
    EditmodeComponent,
    EditHomeComponent,
    EditEventsComponent,
    EditLyricsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
