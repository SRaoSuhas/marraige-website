import { Component,OnInit } from '@angular/core';
import * as JSONdata from './../../../assets/marraige.json'
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  
  data: any;
  ngOnInit() {
    this.data=JSONdata;
    
  }
}
