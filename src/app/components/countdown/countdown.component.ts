import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit{
  seconds = "";
  minutes = "";
  hours = "";
  days = "";
  months = "";
  ngOnInit() {
    const newDate: number = new Date('Nov 05 23 10:19:59').getTime();
    const countdown = setInterval(() => {
      const date: number = new Date().getTime();
      const diff: number = newDate - date;

      const m: number = Math.floor((diff % (1000 * 60 * 60 * 24 * (365.25 / 12) * 365)) / (1000 * 60 * 60 * 24 * (365.25 / 12)));
      const d: number = Math.floor((diff % (1000 * 60 * 60 * 24 * (365.25 / 12)) / (1000 * 60 * 60 * 24)));
      const h: number = Math.floor((diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const min: number = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s: number = Math.floor((diff % (1000 * 60)) / 1000);

      this.seconds = s < 10 ? '0' + s : String(s);
      this.minutes = min < 10 ? '0' + min : String(min);
      this.hours = h < 10 ? '0' + h : String(h);
      this.days = d < 10 ? '0' + d : String(d);
      this.months = m < 10 ? '0' + m : String(m);

      if (diff === 0) {
        clearInterval(countdown);
      }
    }, 1000);
  }
}
