import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
// be stuff
import 'rxjs/add/operator/catch';
// be stuff
import { DataService } from '../data.service';
import { Http } from '@angular/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
        }
      )
      console.log(this.hikeInfo);
  }


//   stubData = [{
//     destination: "Lingering Trail",
//     distance: "15.45 miles",
//     elevation: "400 ft",
//     pass: "Discover Pass required",
//     rating: 2,
//     trailtype: "Loop"
//   },
//   {
//     destination: "Lundin Peak Trail",
//     distance: "15.45 miles",
//     elevation: "400 ft",
//     pass: "Discover Pass required",
//     rating: 2,
//     trailtype: "Point to Point"
//   },
//   {
//     destination: "Lingering Trail",
//     distance: "15.45 miles",
//     elevation: "400 ft",
//     pass: "Discover Pass required",
//     rating: 2,
//     trailtype: "Up & Down"
//   }
// ]

  ngOnInit() {
    this.getDataFromService();
  }

}
