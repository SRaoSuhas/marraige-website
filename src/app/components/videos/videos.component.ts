import { Component, OnInit } from '@angular/core';
import * as JSONdata from './../../../assets/marraige.json'
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  previousScreenSize = innerWidth;
  columns: string[][] = [];
  data: any;
  eventslist: string[] = [];
  videoIdList: string[] = [];
  activeEvent: string = '';
  activeEventIndex: number = 0;

  ngOnInit() {
    this.data = JSONdata;
    this.data.Gallery.Videos.Events.forEach((item: any) => {
      this.eventslist.push(item.Event);
    });
    this.activeEvent =this.eventslist[0]; 
    this.videoIdList = this.data.Gallery.Videos.Events[0].VideoIds;
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

  ngAfterViewInit() {
    this.screenSize();
    $("#video-" + this.activeEvent).addClass("active");
  }

  ngAfterViewChecked() {
    if (this.previousScreenSize != innerWidth) {
      this.previousScreenSize = innerWidth;
      this.screenSize();
    }
  }

  onThumbnailClick(videoId: string) {
    window.open("https://www.youtube.com/embed/" + videoId);
  }

  generateMasonryGrid(columnsNo: number) {
    this.columns = [];
    for (let i = 0; i < columnsNo; i++) {
      this.columns.push([]);
    }
    for (let i = 0; i < this.videoIdList.length; i++) {
      const column = i % columnsNo;
      this.columns[column].push(this.videoIdList[i]);
    }
  }

  OnEventClick(event: string) {
    this.activeEvent = event;
    this.activeEventIndex = this.data.Gallery.Videos.Events.findIndex((x: { Event: string; }) => x.Event == event);
    this.videoIdList = this.data.Gallery.Videos.Events[this.activeEventIndex].VideoIds;
    if (this.videoIdList.length > 0) {
      this.screenSize();
    }
    else{
      this.columns = [];
    }
    $(".tab.video").removeClass("active");
    $("#video-" + event).addClass("active");
    $('#gallery-grid').scrollTop(0); $('#gallery-grid').scrollTop(0);
  }
}
