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
  ngOnInit() {
    this.data = JSONdata;
  }

  ngAfterViewInit() {
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

  ngAfterViewChecked() {
    if (this.previousScreenSize != innerWidth) {
      this.previousScreenSize = innerWidth;
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
  }

  onThumbnailClick(videoId: string) {
    window.open("https://www.youtube.com/embed/" + videoId);
  }

  generateMasonryGrid(columnsNo: number) {
    this.columns = [];
    for (let i = 0; i < columnsNo; i++) {
      this.columns.push([]);
    }
    for (let i = 0; i < this.data.Gallery.Videos.VideoIds.length; i++) {
      const column = i % columnsNo;
      this.columns[column].push(this.data.Gallery.Videos.VideoIds[i]);
    }
  }
}
