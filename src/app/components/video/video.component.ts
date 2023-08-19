import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
onModalClose(){
 $(".ytp-play-button.ytp-button").trigger("click")
}
}
