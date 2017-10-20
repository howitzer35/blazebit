import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/catch';
import { DataService } from '../data.service';
import { Hike } from '../models/hike';

@Component({
  selector: 'app-trails',
  templateUrl: './trails.component.html',
  styleUrls: ['./trails.component.css']
})
export class TrailsComponent implements OnInit {

  searchText: string;
  hikeInfo: Hike[];

  constructor(private dataService: DataService) {
    this.hikeInfo = [];
    for (let j = 0; j < 3; j += 1) {
      for (let i = 0; i < 20; i += 1) {
        this.hikeInfo.push({
          id: -1,
          name: '',
          distance: 5 * j,
          elevation: 0,
          lattitude: 0,
          longitude: 0,
        });
      }
    }
  }

  getDataFromService() {
    this.dataService.getRecords("trails")
      .subscribe(hikeInfo => {
        this.hikeInfo = hikeInfo;
        console.log(this.hikeInfo);
      });
  }

  ngOnInit() {
    this.getDataFromService();
  }
  
  get shortHikes(): Hike[] {
    return this.filterByDistance(0, 5);
  }

  get mediumHikes(): Hike[] {
    return this.filterByDistance(5, 10);
  }

  get longHikes(): Hike[] {
    return this.filterByDistance(10, Number.POSITIVE_INFINITY);
  }

  filterByDistance(from: number, to: number): Hike[] {
    if (!this.hikeInfo) {
      return [];
    }
    return this.hikeInfo
      .filter(hike => hike.distance > from && hike.distance <= to)
      .filter(hike => this.searchText ? hike.name.toLowerCase().indexOf(this.searchText) > -1 : true); 
  }

}
