import { Component, OnInit } from '@angular/core';
import { FunFastUserService } from '../fun-fast-user/fun-fast-user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  currentUser: User; // Probably temporary

  constructor(private funFastUserService: FunFastUserService) { }

  ngOnInit() {
    this.currentUser = this.funFastUserService.currentUser;
  }

}
