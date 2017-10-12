import { Component, OnInit } from '@angular/core';
import { FunFastUserService } from '../fun-fast-user/fun-fast-user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  currentUser: User;
  

  // private funFastUserService: FunFastUserService;

  constructor(private funFastUserService: FunFastUserService) {
    // this.funFastUserService = funFastUserService;
  }

  ngOnInit() {
    this.funFastUserService
      .userChanged
      .subscribe(currentUser => this.currentUser = currentUser);

    this.currentUser = this.funFastUserService.currentUser;
    console.log(this.currentUser);
  }
}
