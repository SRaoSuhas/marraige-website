import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  constructor() { }
  maxPictures = 5;
  imageSlideArray: string[] = [];
  activeImage: string = "";
  activeImageIndex: number = 1;
  isSlideCliked: boolean = false;
  ngOnInit() {
    if (this.maxPictures > 0) {
      for (var i = 1; i <= this.maxPictures; i++) {
        this.imageSlideArray.push("./../../../assets/image-" + i + ".jpg");
      }
      this.activeImage = this.imageSlideArray[0];
    }
  }
  ngAfterViewInit() {
    setInterval(() => {
      if (!this.isSlideCliked) {
        if (this.activeImageIndex == this.imageSlideArray.length) {
          this.activeImageIndex = 0;
        }
        this.activeImage = this.imageSlideArray[this.activeImageIndex]
        this.activeImageIndex++;
      }
    }, 3000);
  }
  slideClicked(item: string) {
    if (item == 'prev') {
      if (this.activeImageIndex <= 0) {
        this.activeImageIndex = this.imageSlideArray.length;
      }
      this.activeImageIndex--;
      this.activeImage = this.imageSlideArray[this.activeImageIndex];
    }
    else {
      if (this.activeImageIndex >= this.imageSlideArray.length - 1) {
        this.activeImageIndex = -1;
      }
      this.activeImageIndex++;
      this.activeImage = this.imageSlideArray[this.activeImageIndex];
    }
    if (!this.isSlideCliked) {
      this.isSlideCliked = true;
      setTimeout(() => {
        this.isSlideCliked = false;
      }, 5000);
    }
  }
  playVideo(url: string) {
    window.open(url);
  }
}
