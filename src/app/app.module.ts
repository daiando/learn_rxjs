import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserEventExperimentsComponent } from './browser-event-experiments/browser-event-experiments.component';
import { EventBusExperimentsComponent } from './event-bus-experiments/event-bus-experiments.component';
import { LessonsCounterComponent } from './lessons-counter/lessons-counter.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowserEventExperimentsComponent,
    BrowserEventExperimentsComponent,
    BrowserEventExperimentsComponent,
    EventBusExperimentsComponent,
    LessonsCounterComponent,
    LessonsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
