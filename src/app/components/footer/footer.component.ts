import { Component, OnInit } from '@angular/core';
import * as JSONdata from './../../../assets/marraige.json'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  data: any;
  ngOnInit() {
    this.data = JSONdata;
    var footerImg = "../assets/" + this.data.FooterBackground;
    $(".footerBg").css("background-image", "url(" + footerImg + ")");
  }
}
