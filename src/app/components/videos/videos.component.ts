import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videoIds: string[] = [
    "Jj7fX3gVe4g",
    "Jj7fX3gVe4g",
    "Jj7fX3gVe4g",
    "Jj7fX3gVe4g",
    "Jj7fX3gVe4g",
    "Jj7fX3gVe4g"];

  previousScreenSize = innerWidth;
  columns: string[][] = [];

  ngOnInit() {
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

  ngAfterViewChecked(){
    if(this.previousScreenSize != innerWidth) {
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
    for (let i = 0; i < this.videoIds.length; i++) {
      const column = i % columnsNo;
      this.columns[column].push(this.videoIds[i]);
    }
  }
}
