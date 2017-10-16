import { Component, OnInit } from '@angular/core';
import { FunFastUserService } from '../fun-fast-user/fun-fast-user.service';
import { User } from '../models/user';
// import { DataService } from '../data.service'


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

  // console.log(this.currentUser);

  // getRecord(){
  //   this.route.params
  //     .switchMap((params: Params) => this.dataService.getRecord("trails", +params['id']))
  //     .subscribe(hike => this.hike = hike);
  // }

}
