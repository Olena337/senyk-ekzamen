import { Component } from '@angular/core';
import {CalendarService} from "../../calendar.service";
import {Calendar} from "../../calendar";

@Component({
  selector: 'app-show-calendar',
  templateUrl: './show-calendar.component.html',
  styleUrls: ['./show-calendar.component.scss']
})
export class ShowCalendarComponent {
  constructor(private service:CalendarService) { }

  calendar!: Calendar[];
  ModalTitle: any;
  event!: Calendar;
  ActivateAddCalendarComp: any;

  word: string = "";

  calendarWithoutFilter!: Calendar[];

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.service.getAllEvents().subscribe(data => {
      this.calendar = data;
      this.calendarWithoutFilter = data;
    });
  }

  addClick(){
    this.event = {
      id: 0,
      name: "",
      description: "",
      time: "",
      frequency: "",
    }
    this.ModalTitle = "Add Event";
    this.ActivateAddCalendarComp = true;
  }

  closeClick(){
    this.ActivateAddCalendarComp = false;
    this.refreshList();
  }

  editClick(c: Calendar) {
    this.event = c;
    this.ModalTitle = "Edit Event";
    this.ActivateAddCalendarComp = true;
  }

  deleteClick(c: Calendar){
    this.service.deleteEvent(c.id).subscribe(data=> {
      this.refreshList();
    });
  }

  filter(){
    let word = this.word;
    if (word == "" || word == null)
      this.refreshList();
    this.service.findEvent(word).subscribe(data => {
      this.calendar = data;
    });
  }
}
