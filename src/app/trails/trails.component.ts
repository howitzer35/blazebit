import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/catch';
import { DataService } from '../data.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-trails',
  templateUrl: './trails.component.html',
  styleUrls: ['./trails.component.css']
})
export class TrailsComponent implements OnInit {

  private destination: string;
  private distance: string;
  private elevation: string;
  private pass: string;
  private rating: string;
  private trailtype: string;

  hikeInfo;

  constructor(
    private http: Http,
    private dataService: DataService) { 
  }

  getDataFromService(){
    this.dataService.getRecords("trails")
      .subscribe(
        hikeInfo => {
          this.hikeInfo = hikeInfo;
          console.log(this.hikeInfo);
        }
      )
  }

  ngOnInit() {
    this.getDataFromService();
  }

}
