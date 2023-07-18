import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  onNavClick(nav: string) {
    $('html, body').animate({
      scrollTop: $("#" + nav).scrollTop
    }, 2000);
  }
}
