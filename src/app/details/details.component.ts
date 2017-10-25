import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FunFastUserService } from '../fun-fast-user/fun-fast-user.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service'
import { User } from '../models/user';
import { Hike } from '../models/hike';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  hike: Hike;
  // hike: object;
  successMessage: string;
  errorMessage: string;
  currentUser: User;
  hikePath;
  lattitude : number = 0;
  longitude : number = 0;

  arrayOfImages = [
    "/assets/hike-trails/hike1.jpg",
    "/assets/hike-trails/hike2.jpg",
    "/assets/hike-trails/hike3.jpg",
    "/assets/hike-trails/hike4.jpg",
    "/assets/hike-trails/hike5.jpg",
    "/assets/hike-trails/hike6.jpg",
    "/assets/hike-trails/hike7.jpg",
    "/assets/hike-trails/hike8.jpg",
    "/assets/hike-trails/hike9.jpg",
    "/assets/hike-trails/hike10.jpg",
    "/assets/hike-trails/hike11.jpg",
    "/assets/hike-trails/hike12.jpg",
    "/assets/hike-trails/hike13.jpg",
    "/assets/hike-trails/hike14.jpg",
    "/assets/hike-trails/hike15.jpg",
    "/assets/hike-trails/hike16.jpg",
    "/assets/hike-trails/hike17.jpg",
    "/assets/hike-trails/hike18.jpg",
    "/assets/hike-trails/hike19.jpg",
    "/assets/hike-trails/hike20.jpg",
    "/assets/hike-trails/hike21.jpg",
    "/assets/hike-trails/hike22.jpg"
  ]

  randomHikeImage() {
    return  [
      this.arrayOfImages[Math.floor(Math.random() * this.arrayOfImages.length)]
    ];     
  }


  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private funFastUserService: FunFastUserService,
    private router: Router,
    private sanitizer: DomSanitizer
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
    this.hikePath = this.randomHikeImage();
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

  getCoordURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed/v1/view?key=AIzaSyAbQGwJAp43HJ2uZgwgL-49rqM7xaNWxyk
    &center=${this.hike.lattitude},${this.hike.longitude}
    &zoom=18
    &maptype=satellite`)
  }

}

//make funfastuserservice available