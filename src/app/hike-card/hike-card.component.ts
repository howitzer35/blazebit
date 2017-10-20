import { Component, Input } from '@angular/core';
import { Hike } from '../models/hike';

@Component({
  selector: 'bb-hike-card',
  templateUrl: './hike-card.component.html',
  styleUrls: ['./hike-card.component.css']
})
export class HikeCardComponent {

  @Input()
  hike: Hike;

  private imageIndex: number;
  private images: string[];

  constructor() {
    this.images = [
      "/assets/hike-trails/hike1.jpg",
      "/assets/hike-trails/hike2.jpg",
      "/assets/hike-trails/hike3.jpg",
      "/assets/hike-trails/hike4.jpg",
      "/assets/hike-trails/hike5.jpg",
      "/assets/hike-trails/hike6.jpg",
      "/assets/hike-trails/hike7.jpg",
      "/assets/hike-trails/hike8.jpg",
      "/assets/hike-trails/hike9.jpg",
      "/assets/hike-trails/hike10.jpg"
    ];
    this.imageIndex = Math.floor(Math.random() * this.images.length);
  }

  get image() {
    return this.images[this.imageIndex];
  }

}
