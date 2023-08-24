import { Component, OnInit } from '@angular/core';
import * as JSONdata from './../../../assets/marraige.json'
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data:any;
  ngOnInit() {
    this.data = JSONdata;
  }
  openMenu = false;
  onNavClick(nav: string) {
    $('html, body').animate({
      'scrollTop': $("#" + nav).position().top
    }, 2000);
    if(this.openMenu){
      this.openMenuInMob();
    }
  }
  openMenuInMob() {
    this.openMenu = !this.openMenu;
  }
}
