import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  jsonDataResult: any;
  constructor(private http: HttpClient) {
    this.http.get('assets/marraigeJSON').subscribe((res) => {
      this.jsonDataResult = res;
      this.activeImageId = this.jsonDataResult.Carousel.ImageIds[0];
      this.imageSlideArray = this.jsonDataResult.Carousel.ImageIds;
      this.isNotonLoad = true;
    });
  }
  imageSlideArray: string[] = [];
  activeImageId: string = "";
  activeImageIndex: number = 1;
  isSlideCliked: boolean = false;
  isNotonLoad = false;
  ngOnInit() {

  }
  ngAfterViewInit() {
    setInterval(() => {
      if (!this.isSlideCliked && this.isNotonLoad) {
        if (this.activeImageIndex == this.imageSlideArray.length) {
          this.activeImageIndex = 0;
        }
        this.activeImageId = this.imageSlideArray[this.activeImageIndex]
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
      this.activeImageId = this.imageSlideArray[this.activeImageIndex];
    }
    else {
      if (this.activeImageIndex >= this.imageSlideArray.length - 1) {
        this.activeImageIndex = -1;
      }
      this.activeImageIndex++;
      this.activeImageId = this.imageSlideArray[this.activeImageIndex];
    }
    if (!this.isSlideCliked) {
      this.isSlideCliked = true;
      setTimeout(() => {
        this.isSlideCliked = false;
      }, 5000);
    }
  }
  playVideo() {
    window.open("https://www.youtube.com/embed/" + this.jsonDataResult.Carousel.VideoId);
  }
}
