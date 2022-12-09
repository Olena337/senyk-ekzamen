import {Component, Input} from '@angular/core';
import {Calendar} from "../../calendar";
import {CalendarService} from "../../calendar.service";

@Component({
  selector: 'app-add-calendar',
  templateUrl: './add-calendar.component.html',
  styleUrls: ['./add-calendar.component.scss']
})
export class AddCalendarComponent {
  constructor(private service:CalendarService) { }

  @Input() event!:Calendar;
  Id: number | undefined;
  Name: string | undefined;
  Description: string | undefined;
  Time: string | undefined;
  Frequency: string | undefined;

  ngOnInit(): void {
    this.Id = this.event.id;
    this.Name = this.event.name;
    this.Description = this.event.description;
    this.Time = this.event.time;
    this.Frequency = this.event.frequency;
  }

  addEvent(){
    let val = { Id:this.Id, Name:this.Name, Description:this.Description, Time:this.Time, Frequency:this.Frequency };
    this.service.addEvent(val).subscribe(data => {

    });
  }

  updateEvent(){
    let val = { Id:this.Id, Name:this.Name, Description:this.Description, Time:this.Time, Frequency:this.Frequency };
    this.service.updateEvent(val, this.Id).subscribe(data => {

    });
  }
}
