import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-and-family',
  templateUrl: './friends-and-family.component.html',
  styleUrls: ['./friends-and-family.component.css']
})
export class FriendsAndFamilyComponent implements OnInit {
  groomsmenDetails = [{ "name": "S N Subramanya Rao", "imgSrc": "", "phoneNumber": "+91 94482 08653" },
  { "name": "Shree Shyla", "imgSrc": "", "phoneNumber": "+91 94489 59031" },
  { "name": "Sudhanva S Rao", "imgSrc": "", "phoneNumber": "+91 63641 38400" }];

  bridesmaidDetails = [{ "name": "S N Subramanya Rao", "imgSrc": "", "phoneNumber": "+91 94482 08653" },
  { "name": "Shree Shyla", "imgSrc": "", "phoneNumber": "+91 94489 59031" },
  { "name": "Sudhanva S Rao", "imgSrc": "", "phoneNumber": "+91 63641 38400" }];
  ngOnInit() {

  }
}
