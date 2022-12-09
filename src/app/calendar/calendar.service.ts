import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  readonly APIUrl="http://localhost:24402/api/Calendar/";

  constructor(private http:HttpClient) { }

  getAllEvents() : Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'Get all events');
  }

  findEvent(val:any) : Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'Find event?word=' + val);
  }

  addEvent(val:any){
    return this.http.post(this.APIUrl + 'Add event', val);
  }

  updateEvent(val:any, id:any){
    return this.http.put(this.APIUrl + 'Update event?id=' + id, val);
  }

  deleteEvent(val:any){
    return this.http.delete(this.APIUrl + 'Delete event?id=' + val);
  }
}
