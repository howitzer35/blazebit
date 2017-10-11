import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hike',
  templateUrl: './hike.component.html',
  styleUrls: ['./hike.component.css']
})
export class HikeComponent implements OnInit {

  private destination: string;
  private distance: string;
  private elevation: string;
  private pass: string;
  private rating: string;
  private trailtype: string;

  constructor() { }

  stubData = [{
    destination: "Lingering Trail",
    distance: "15.45 miles",
    elevation: "400 ft",
    pass: "Discover Pass required",
    rating: 2,
    trailtype: "Loop"
  },
  {
    destination: "Lundin Peak Trail",
    distance: "15.45 miles",
    elevation: "400 ft",
    pass: "Discover Pass required",
    rating: 2,
    trailtype: "Point to Point"
  },
  {
    destination: "Lingering Trail",
    distance: "15.45 miles",
    elevation: "400 ft",
    pass: "Discover Pass required",
    rating: 2,
    trailtype: "Up & Down"
  }
]
  

  ngOnInit() {
  }

  

}
