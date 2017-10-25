import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/catch';
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
  }

  ngOnInit() {
    this.getDataFromService();
  }
}
