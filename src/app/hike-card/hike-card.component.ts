import { Component, Input, HostBinding, OnInit } from '@angular/core';
import { Hike } from '../models/hike';

@Component({
  selector: 'bb-hike-card',
  templateUrl: './hike-card.component.html',
  styleUrls: ['./hike-card.component.css']
})
export class HikeCardComponent implements OnInit {

  @Input()
  hike: Hike;

  @HostBinding('class.small') 
  @Input()
  size: string;

  private imageToShow: string;
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
      "/assets/hike-trails/hike10.jpg",
      "/assets/hike-trails/hike11.jpg",
      "/assets/hike-trails/hike12.jpg",
      "/assets/hike-trails/hike13.jpg",
      "/assets/hike-trails/hike14.jpg",
      "/assets/hike-trails/hike15.jpg",
      "/assets/hike-trails/hike16.jpg",
      "/assets/hike-trails/hike17.jpg",
      "/assets/hike-trails/hike18.jpg",
      "/assets/hike-trails/hike19.jpg",
      "/assets/hike-trails/hike20.jpg",
      "/assets/hike-trails/hike21.jpg",
      "/assets/hike-trails/hike22.jpg"
    ];
    this.imageToShow = this.images[Math.floor(Math.random() * this.images.length)];
    this.hike = {
      id: -1,
      name: 'Placeholder',
      distance: 0,
      elevation: 0,
      lattitude: 0,
      longitude: 0,
    };
  }

  ngOnInit(): void {
    if (this.hike.name === null || this.hike.name.length === 0) {
      this.imageToShow = 'http://via.placeholder.com/400x400';
    }
  }

  get image(): string {
    return this.imageToShow;
  }

}
