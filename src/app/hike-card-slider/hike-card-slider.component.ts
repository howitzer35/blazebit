import { Component } from '@angular/core';

@Component({
  selector: 'bb-hike-card-slider',
  templateUrl: './hike-card-slider.component.html',
  styleUrls: ['./hike-card-slider.component.css']
})
export class HikeCardSliderComponent  {

  leftist: number;
  wrapped: boolean;

  constructor() {
    this.leftist = 0;
  }

  moveLeft() {
     this.leftist -= 100;
  }

  moveRight() {
    this.leftist += 100;
    this.leftist = Math.min(0, this.leftist);
  }

  toggleLayout() {
    this.wrapped = !this.wrapped;
  }

}
