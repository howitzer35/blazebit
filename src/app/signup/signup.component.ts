import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
// be stuff
import 'rxjs/add/operator/catch';
// be stuff
import { DataService } from '../data.service';
import { Http } from '@angular/http';
import { FunFastUserService } from '../fun-fast-user/fun-fast-user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  successMessage: string;
  errorMessage: string;
  username: string = '';
  password: string = '';

  signUpData: object;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: Http,
    private funFastUserService: FunFastUserService
  ) {}

  ngOnInit() {
    // this.route.params
    //   .subscribe((params: Params) => {
    //     (+params['id']) ? this.getRecordForEdit() : null;
    //   });
  }

  saveRegisterForm(signUpData: NgForm){
    console.log(signUpData.value);

    this.funFastUserService
      .signup(signUpData.value.username, signUpData.value.password)
      .subscribe(user => this.handleSuccessfulSignup(user));
    this.signUpData = {};
  }

  private handleSuccessfulSignup(user: User) {
    this.successMessage = "User account created successfully";
  }



}

