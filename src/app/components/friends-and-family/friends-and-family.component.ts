import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-friends-and-family',
  templateUrl: './friends-and-family.component.html',
  styleUrls: ['./friends-and-family.component.css']
})


export class FriendsAndFamilyComponent implements OnInit {
  jsonDataResult: any;
  constructor(private http: HttpClient) {
    this.http.get('assets/marraigeJSON').subscribe((res) => {
      this.jsonDataResult = res;
      this.groomsmenDetails = this.jsonDataResult.FriendsAndFamily.filter((x: { Side: string; }) => x.Side.toLowerCase() == "groom");
      this.bridesmaidDetails = this.jsonDataResult.FriendsAndFamily.filter((x: { Side: string; }) => x.Side.toLowerCase() == "bride");
    });
  }
  groomsmenDetails = [{ "Side": "", "Name": "", "PhoneNumber": "", "ImageId": "" }];
  bridesmaidDetails = [{ "Side": "", "Name": "", "PhoneNumber": "", "ImageId": "" }];
  ngOnInit() {
  }
}
