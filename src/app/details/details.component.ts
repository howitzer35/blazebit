import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FunFastUserService } from '../fun-fast-user/fun-fast-user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { DataService } from '../data.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  hike: object;
  successMessage: string;
  errorMessage: string;
  currentUser: User;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private funFastUserService: FunFastUserService, 
    private router: Router
  ) {}

  getRecordForEdit(){
    this.route.params
      .switchMap((params: Params) => this.dataService.getRecord("trails", +params['id']))
      .subscribe(hike => this.hike = hike);
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        (+params['id']) ? this.getRecordForEdit() : null;
      });
    this.funFastUserService
    .userChanged
    .subscribe(currentUser => this.currentUser = currentUser);
    this.currentUser = this.funFastUserService.currentUser;
    console.log(this.currentUser);
  }


  addHikeToUser(id:number) {
    this.dataService.manageHikeRecord("users/trails", id)
    .subscribe(user => this.handleSuccessfulSignup(user));
    }
 
    private handleSuccessfulSignup(user: User) {
      this.successMessage = "Hike added to user successfully";
    }
  

}

//make funfastuserservice available