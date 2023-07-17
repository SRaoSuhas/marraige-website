import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  q: string[] = ["https://drive.google.com/uc?export=view&id=1-MY45s7hDmzEBxW6pqqZBxMVWHxmOKj5",
    "https://drive.google.com/uc?export=view&id=1-MY45s7hDmzEBxW6pqqZBxMVWHxmOKj5",
    "https://drive.google.com/uc?export=view&id=1-MY45s7hDmzEBxW6pqqZBxMVWHxmOKj5",
    "https://drive.google.com/uc?export=view&id=1-MY45s7hDmzEBxW6pqqZBxMVWHxmOKj5",
    "https://drive.google.com/uc?export=view&id=1ZG4i157iOdV-5XZiaOc7g7gLw0DJbr1l"];
  activeImage: string = "";
  imageArray: string[] = [];
  ngOnInit() {
    for (var i = 0; i < 14; i++) {
      var r = Math.round(Math.random() * 5);
      if (r >= 5) {
        r = 4;
      }
      this.imageArray.push(this.q[r]);
    }
    this.activeImage = this.imageArray[0];
  }
  onImageClick(imgSrc: string) {
    this.activeImage = imgSrc;
  }
}
