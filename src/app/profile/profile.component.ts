import { Component, OnInit } from '@angular/core';
import { FunFastUserService } from '../fun-fast-user/fun-fast-user.service';
import { DataService } from '../data.service'
import { User } from '../models/user';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
// export class ProfileComponent implements OnInit {

export class ProfileComponent {

  dtOptions: DataTables.Settings = { order: [[0, "desc"]] };
  currentUser: any;
  successMessage: string;
  errorMessage: string;
  completedTrailsClone: any[];

  constructor(private funFastUserService: FunFastUserService, private dataService: DataService) { }

  populateTables() {

    //populates distance over hikes line chart
    for (var index = 0; index < this.currentUser.completedTrails.length; index++) {
      this.lineChartLabels.push(this.currentUser.completedTrails[index].name)
      this.lineChartData.push(this.currentUser.completedTrails[index].distance)
    }
    //populates elevation over hikes bar chart
    for (var index = 0; index < this.currentUser.completedTrails.length; index++) {
      this.barChartLabels.push(this.currentUser.completedTrails[index].name)
      this.barChartData.push(this.currentUser.completedTrails[index].elevation)
    }
  }


  ngOnInit() {
    this.currentUser = this.funFastUserService.currentUser;
    this.populateTables();
    // this.dtOptions = {

    // };
  }

  // Distance over hikes
  public lineChartOptions: Object = {
    scales: {
      xAxes: [{
        ticks: {
          autoSkip: false
        }
      }]
    }
  }
  public barChartOptions: Object = this.lineChartOptions

  public lineChartData: Array < any > = [];
  public lineChartLabels: Array < any > = [];
  public lineChartType: string = 'line';

  // Elevation over hikes
  public barChartData: Array < any > = [];
  public barChartLabels: Array < any > = [];
  public barChartType: string = 'bar';

  public chartClicked(e:any):void {
  console.log(e);
}
 
  public chartHovered(e:any):void {
  console.log(e);
}

//adds 1 hike to list of completed hikes for user
addHikeToUser(id: number) {
  this.dataService.manageHikeRecord("users/trails", id)
    .subscribe(user => this.handleSuccessfulWishlistComplete(user));
}

private handleSuccessfulWishlistComplete(user: User) {
  this.successMessage = "Wishlist Hike was successfully added to complete list for user!";
  this.funFastUserService.refreshUser(user);
  this.ngOnInit();
}

deleteWishlistHike(id: number) {
  this.dataService.deleteWishlistRecord("users/trails", id)
    .subscribe(user => this.handleSuccessfulWishDelete(user));
}

  private handleSuccessfulWishDelete(user: User) {
  this.successMessage = "Wishlist Hike was successfully deleted for user!";
  this.funFastUserService.refreshUser(user);
  this.ngOnInit();
}

}











