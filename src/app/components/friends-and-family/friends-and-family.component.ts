import { Component, OnInit } from '@angular/core';
import * as JSONdata from './../../../assets/marraige.json'
@Component({
  selector: 'app-friends-and-family',
  templateUrl: './friends-and-family.component.html',
  styleUrls: ['./friends-and-family.component.css']
})
export class FriendsAndFamilyComponent implements OnInit {
  data: any;
  ngOnInit() {
    this.data = JSONdata;
  }
}
