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
  ) { }

  getRecordForEdit() {
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

  //adds 1 hike to list of completed hikes for user
  addHikeToUser(id: number) {
    this.dataService.manageHikeRecord("users/trails", id)
      .subscribe(user => this.handleSuccessfulHike(user));
  }

  private handleSuccessfulHike(user: User) {
    this.successMessage = "Completed Hike added to user successfully";
    this.funFastUserService.refreshUser(user);
  }

  //adds 1 hike to list of wishlists hikes for user
  addWishToUser(id: number) {
    this.dataService.manageWishRecord("users/trails", id)
      .subscribe(user => this.handleSuccessfulWish(user));
  }

  private handleSuccessfulWish(user: User) {
    this.successMessage = "Wishlist Hike added to user successfully";
    this.funFastUserService.refreshUser(user);
  }

}

//make funfastuserservice available