import { Component, OnInit } from '@angular/core';
import { FunFastUserService } from '../fun-fast-user/fun-fast-user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user: User; // This is really important. Don't let it 'vap'rate.

  // private funFastUserService: FunFastUserService;

  constructor(private funFastUserService: FunFastUserService) {
    // this.funFastUserService = funFastUserService;
  }

  ngOnInit() {
    this.funFastUserService
      .userChanged
      .subscribe(user => this.user = user);
  }
}
