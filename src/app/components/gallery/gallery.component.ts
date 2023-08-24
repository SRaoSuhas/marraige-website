import { Component, OnInit } from '@angular/core';
import * as JSONdata from './../../../assets/marraige.json'
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  data: any;
  activeImageId: string = '';
  activeEvent: string = '';
  activeEventIndex: number = 0;
  previousScreenSize = 0;
  eventslist: string[] = [];
  columns: string[][] = [];
  ngOnInit() {
    this.data = JSONdata;
    this.previousScreenSize = innerWidth;
    this.activeEvent = this.data.Gallery.Images.Events[0].Event;
    this.activeImageId = this.data.Gallery.Images.Events[0].ImageIds[0];
    this.data.Gallery.Images.Events.forEach((item: any) => {
      this.eventslist.push(item.Event);
    });
  }

  ngAfterViewInit() {
    this.screenSize();
    $("#" + this.activeEvent).addClass("active");
  }

  ngAfterViewChecked() {
    if (this.previousScreenSize != innerWidth) {
      this.previousScreenSize = innerWidth;
      this.screenSize();
    }
  }

  screenSize() {
    if (this.previousScreenSize < 600) {
      this.generateMasonryGrid(1);
    }
    else if (this.previousScreenSize >= 600 && this.previousScreenSize < 1000) {
      this.generateMasonryGrid(2);
    }
    else {
      this.generateMasonryGrid(4);
    }
  }

  onImageClick(imageId: string) {
    this.activeImageId = imageId;
  }

  OnEventClick(event: string) {
    this.activeEvent = event;
    this.activeEventIndex = this.data.Gallery.Images.Events.findIndex((x: { Event: string; }) => x.Event == event);
    this.screenSize();
    $(".tab").removeClass("active");
    $("#" + event).addClass("active");
    $('#gallery-grid').scrollTop(0);
  }

  generateMasonryGrid(columnsNo: number) {
    this.columns = [];
    for (let i = 0; i < columnsNo; i++) {
      this.columns.push([]);
    }
    for (let i = 0; i < this.data.Gallery.Images.Events[this.activeEventIndex].ImageIds.length; i++) {
      const column = i % columnsNo;
      this.columns[column].push(
        this.data.Gallery.Images.Events[this.activeEventIndex].ImageIds[i]
      );
    }
  }

  downloadImg() {
    window.open('https://drive.google.com/uc?export=download&id=' + this.activeImageId);
  }

  copyImgLink() {
    navigator.clipboard.writeText('https://drive.google.com/uc?export=view&id=' + this.activeImageId);
  }
}
