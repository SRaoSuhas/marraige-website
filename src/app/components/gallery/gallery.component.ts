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
  pagination: string[] = [];
  activePage: number = 1
  ngOnInit() {
    this.data = JSONdata;
    this.previousScreenSize = innerWidth;
    this.activeEvent = this.data.Gallery.Images.Events[0].Event;
    this.activeImageId = this.data.Gallery.Images.Events[0].ImageIds[0];
    this.data.Gallery.Images.Events.forEach((item: any) => {
      this.eventslist.push(item.Event);
    });
    this.createPagination(1);
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
    $('.paginationTiles').removeClass("active");
    $('#paginationTiles-' + this.activePage).addClass("active");
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
    if (this.data.Gallery.Images.Events[this.activeEventIndex].ImageIds.length > 0) {
      for (let i = 0; i < columnsNo; i++) {
        this.columns.push([]);
      }
      for (let i = (this.activePage - 1) * 20; i < ((this.activePage - 1) * 20) + 20; i++) {
        if (i < this.data.Gallery.Images.Events[this.activeEventIndex].ImageIds.length) {
          const column = i % columnsNo;
          this.columns[column].push(
            this.data.Gallery.Images.Events[this.activeEventIndex].ImageIds[i]
          );
        }
      }
      this.activeImageId = this.columns[0][0];
    }
  }

  downloadImg() {
    window.open('https://drive.google.com/uc?export=download&id=' + this.activeImageId);
  }

  copyImgLink() {
    navigator.clipboard.writeText('https://drive.google.com/uc?export=view&id=' + this.activeImageId);
  }

  createPagination(activePage: number) {
    this.pagination = [];
    var totalPages = Math.ceil(this.data.Gallery.Images.Events[this.activeEventIndex].ImageIds.length / 20);
    this.pagination.push("<<");
    this.pagination.push("<");
    if (totalPages <= 5 || activePage <= 3) {
      for (var i = 1; i <= totalPages; i++) {
        this.pagination.push(i.toString());
      }
    }
    else if (activePage >= totalPages - 2) {
      this.pagination.push((totalPages - 4).toString());
      this.pagination.push((totalPages - 3).toString());
      this.pagination.push((totalPages - 2).toString());
      this.pagination.push((totalPages - 1).toString());
      this.pagination.push(totalPages.toString());
    }
    else {
      this.pagination.push((activePage - 2).toString());
      this.pagination.push((activePage - 1).toString());
      this.pagination.push(activePage.toString());
      this.pagination.push((activePage + 1).toString());
      this.pagination.push((activePage + 2).toString());
    }
    this.pagination.push(">");
    this.pagination.push(">>");
    this.activePage = activePage;
  }

  onPaginationClick(page: string) {
    if (page != "<<" && page != "<" && page != ">" && page != ">>" && this.activePage != Number(page)) {
      this.createPagination(Number(page));
    }
    else if (page == "<<") {
      this.createPagination(1);
    }
    else if (page == "<" && this.activePage - 1 > 0) {
      this.createPagination(this.activePage - 1);
    }
    else {
      var totalPages = Math.ceil(this.data.Gallery.Images.Events[this.activeEventIndex].ImageIds.length / 20);
      if (page == ">" && this.activePage + 1 <= totalPages) {
        this.createPagination(totalPages + 1);
      }
      else if (page == ">>") {
        this.createPagination(totalPages);
      }
    }
    this.screenSize();
  }
}
