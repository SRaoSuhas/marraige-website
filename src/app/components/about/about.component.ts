import { Component, OnInit } from '@angular/core';
import * as JSONdata from './../../../assets/marraige.json'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data:any;
  ngOnInit() {
    this.data=JSONdata;
  }

}
