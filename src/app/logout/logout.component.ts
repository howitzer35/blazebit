import { Component, OnInit } from '@angular/core';
import { FunFastUserService } from '../fun-fast-user/fun-fast-user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  currentUser: User;

  constructor(private funFastUserService: FunFastUserService) {
  }
  


  ngOnInit() {
    this.funFastUserService
    .userChanged
    .subscribe(currentUser => this.currentUser = currentUser);

  this.currentUser = this.funFastUserService.currentUser;
  console.log(this.currentUser);
  }

}
