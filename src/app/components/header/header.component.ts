import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  jsonDataResult: any;
  constructor(private http: HttpClient) {
    this.http.get('assets/marraigeJSON').subscribe((res) => {
      this.jsonDataResult = res;
      this.groomName = this.jsonDataResult.About.Groom.Name
    });
  }
  ngOnInit() {
    
  }
  groomName = "";
  brideName = "";
  onNavClick(nav: string) {
    $('html, body').animate({
      'scrollTop': $("#" + nav).position().top
    }, 2000);
  }
}
