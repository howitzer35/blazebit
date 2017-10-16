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

  // markHikeCompleted() {
  //   return this.dataService
  //   .editRecord("trails", )


  //   .login(signUpData.value.username, signUpData.value.password)
  //   .subscribe(
  //     // hike => this.router.navigate(['hike', hike.id])
  //     () => this.router.navigate(['home']),
  //     () => this.router.navigate(['home'])
  //   );
  //  this.signUpData = {};
  // }


}

//make funfastuserservice available