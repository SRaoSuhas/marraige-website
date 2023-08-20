import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  jsonDataResult: any;
  constructor(private http: HttpClient) {
    this.http.get('assets/marraigeJSON').subscribe((res) => {
      this.jsonDataResult = res;
      this.events = [];
      this.jsonDataResult.Events.forEach((item:any)=> {
        this.event.Name = item.Name;
        this.event.Location=item.Location
        this.event.LocationURL=item.LocationURL
        this.event.Date=item.Date
        this.event.Time=item.Time
        this.event.ImageURL="https://drive.google.com/uc?export=view&id="+ item.ImageId;
      });
      this.events.push(this.event)
    });
  }
  event = {
    "Name": "",
    "Location": "",
    "LocationURL": "",
    "Date": "",
    "Time": "",
    "ImageURL": ""
  }
  events = [this.event];
}
