import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCalendarComponent } from './show-calendar/show-calendar.component';
import { AddCalendarComponent } from './add-calendar/add-calendar.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ShowCalendarComponent,
    AddCalendarComponent
  ],
  exports: [
    ShowCalendarComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class CalendarModule { }
