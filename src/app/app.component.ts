import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wedding';
  jsonDataResult: any;
  constructor(private http: HttpClient) {
    this.http.get('assets/marraigeJSON').subscribe((res) => {
      this.jsonDataResult = res;
    });
  }
}
