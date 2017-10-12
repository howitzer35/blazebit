import { Component, OnInit } from '@angular/core';
import { FunFastUserService } from '../fun-fast-user/fun-fast-user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  currentUser: User;
  

  // private funFastUserService: FunFastUserService;

  constructor(private funFastUserService: FunFastUserService, private router: Router) {
    // this.funFastUserService = funFastUserService;
  }

  clearLocalStorage() {
    console.log('hello?');
    this.funFastUserService
      .logout()
      .subscribe(
        // hike => this.router.navigate(['hike', hike.id])
        () => this.router.navigate(['home']),
        () => this.router.navigate(['home']),
      );
  }
  

  ngOnInit() {
    this.funFastUserService
      .userChanged
      .subscribe(currentUser => this.currentUser = currentUser);

    this.currentUser = this.funFastUserService.currentUser;
    console.log(this.currentUser);
  }
}
