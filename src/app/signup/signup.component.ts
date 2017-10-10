import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
// be stuff
import 'rxjs/add/operator/catch';
// be stuff
import { DataService } from '../data.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  successMessage: string;
  errorMessage: string;

  signUpData: object;


  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location,
    private http: Http
  ) {}

  ngOnInit() {
    // this.route.params
    //   .subscribe((params: Params) => {
    //     (+params['id']) ? this.getRecordForEdit() : null;
    //   });
  }

  saveRegisterForm(signUpData: NgForm){
    console.log(signUpData.value);
    
    this.dataService.addRecord("users/new", signUpData.value)
      .subscribe(
        signUpData => this.successMessage = "Record added succesfully",
        error =>  this.errorMessage = <any>error
      );
    this.signUpData = {};
  }

}






