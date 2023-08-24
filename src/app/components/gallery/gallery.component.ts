import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: string[] = [
    "https://drive.google.com/uc?export=view&id=1-MY45s7hDmzEBxW6pqqZBxMVWHxmOKj5",
    "https://drive.google.com/uc?export=view&id=1ZG4i157iOdV-5XZiaOc7g7gLw0DJbr1l",
    "https://drive.google.com/uc?export=view&id=1ZG4i157iOdV-5XZiaOc7g7gLw0DJbr1l",
    "https://drive.google.com/uc?export=view&id=1-MY45s7hDmzEBxW6pqqZBxMVWHxmOKj5",
    "https://drive.google.com/uc?export=view&id=1ZG4i157iOdV-5XZiaOc7g7gLw0DJbr1l",
    "https://drive.google.com/uc?export=view&id=1-MY45s7hDmzEBxW6pqqZBxMVWHxmOKj5",
    "https://drive.google.com/uc?export=view&id=1ZG4i157iOdV-5XZiaOc7g7gLw0DJbr1l",
    "https://drive.google.com/uc?export=view&id=1-MY45s7hDmzEBxW6pqqZBxMVWHxmOKj5",
    "https://drive.google.com/uc?export=view&id=1-MY45s7hDmzEBxW6pqqZBxMVWHxmOKj5",
    "https://drive.google.com/uc?export=view&id=1ZG4i157iOdV-5XZiaOc7g7gLw0DJbr1l",
    "https://drive.google.com/uc?export=view&id=1-MY45s7hDmzEBxW6pqqZBxMVWHxmOKj5",
    "https://drive.google.com/uc?export=view&id=1ZG4i157iOdV-5XZiaOc7g7gLw0DJbr1l"];
  activeImage: string = "";

  previousScreenSize = 0;
  columns: string[][] = [];
  ngOnInit() {
    this.previousScreenSize = innerWidth;
    this.activeImage = this.images[0];
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
  
  onImageClick(imgSrc: string) {
    this.activeImage = imgSrc;
  }

  generateMasonryGrid(columnsNo: number) {
    this.columns = [];
    for (let i = 0; i < columnsNo; i++) {
      this.columns.push([]);
    }
    for (let i = 0; i < this.images.length; i++) {
      const column = i % columnsNo;
      this.columns[column].push(this.images[i]);
    }
  }

  downloadImg(url:string){
    window.open(url.replace("export=view","export=download"));
  }

  copyImgLink(url:string){
    navigator.clipboard.writeText(url);
  }
}
