import { Component, OnInit } from '@angular/core';
import * as JSONdata from './../../../assets/marraige.json'
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  activeImageId: string = "";
  activeImageIndex: number = 1;
  isSlideCliked: boolean = false;
  data: any;

  ngOnInit() {
    this.data = JSONdata;
    this.activeImageId = this.data.Carousel.ImageIds[0];
  }

  ngAfterViewInit() {
    setInterval(() => {
      if (!this.isSlideCliked) {
        if (this.activeImageIndex == this.data.Carousel.ImageIds.length) {
          this.activeImageIndex = 0;
        }
        this.activeImageId = this.data.Carousel.ImageIds[this.activeImageIndex];
        this.activeImageIndex++;
      }
    }, 3000);
  }

  playVideo() {
    window.open("https://www.youtube.com/embed/" + this.data.Carousel.VideoId);
  }
}
