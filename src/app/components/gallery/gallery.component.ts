import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  jsonDataResult: any;
  constructor(private http: HttpClient) {
    this.http.get('assets/marraigeJSON').subscribe((res) => {
      this.jsonDataResult = res;
      this.activeImageId = this.jsonDataResult.Gallery.Images.ImagesIds[0];
    });
  }
  activeImageId: string = "";
  previousScreenSize = 0;
  columns: string[][] = [];
  ngOnInit() {
    this.previousScreenSize = innerWidth;
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

  onImageClick(imgSrc: string) {
    this.activeImageId = imgSrc;
  }

  generateMasonryGrid(columnsNo: number) {
    this.columns = [];
    for (let i = 0; i < columnsNo; i++) {
      this.columns.push([]);
    }
    for (let i = 0; i < this.jsonDataResult.Gallery.Images.ImagesIds.length; i++) {
      const column = i % columnsNo;
      this.columns[column].push(this.jsonDataResult.Gallery.Images.ImagesIds[i]);
    }
  }

  downloadImg() {
    window.open("https://drive.google.com/uc?export=download&id=" + this.activeImageId);
  }

  copyImgLink() {
    navigator.clipboard.writeText("https://drive.google.com/uc?export=view&id=" + this.activeImageId);
  }
}
