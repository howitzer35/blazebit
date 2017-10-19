import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
// be stuff
import 'rxjs/add/operator/catch';
// be stuff
import { DataService } from '../data.service';
import { ErrorService } from '../error.service';
import { Http } from '@angular/http';
import { FunFastUserService } from '../fun-fast-user/fun-fast-user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  successMessage: string;
  errorMessage: string;
  username: string = '';
  password: string = '';

  signUpData: object;

  constructor(
    private funFastUserService: FunFastUserService, 
    private error: ErrorService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  saveLoginForm(signUpData: NgForm){
    // console.log(signUpData.value);

    this.funFastUserService
      .login(signUpData.value.username, signUpData.value.password)
      .subscribe(
        () => {
          this.router.navigate(['home'])
          console.log("yeah")
        },
        errorResponse => {
          console.log(errorResponse)
          this.errorMessage = this.error.message(JSON.parse(errorResponse))
        }
      );
     this.signUpData = {};
  }

 

}
