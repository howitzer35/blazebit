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
  distanceTotal: any;
  elevationTotal: any;
  hikeCounter = 0;

   // Distance over hikes
   public lineChartOptions: Object = {
    scales: {
      xAxes: [{
        ticks: {
          autoSkip: false
        }
      }]
    },
    title: {
      display: true,
      text: 'Distance'
    },
    legend: {
      display: false
    }
  }

  public barChartOptions: Object = {
    scales: {
      xAxes: [{
        ticks: {
          autoSkip: false
        }
      }]
    },
    title: {
      display: true,
      text: 'Elevation'
    },
    legend: {
      display: false
    }
  }

  // public barChartOptions: Object = this.lineChartOptions

  public lineChartData: Array < any > = [];
  public lineChartLabels: Array < any > = [];
  public lineChartType: string = 'line';

  // Elevation over hikes
  public barChartData: Array < any > = [];
  public barChartLabels: Array < any > = [];
  public barChartType: string = 'bar';

  public chartClicked(e:any):void {
  // console.log(e);
}
 
  public chartHovered(e:any):void {
  // console.log(e);
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

  constructor(private funFastUserService: FunFastUserService, private dataService: DataService) { }

  populateTables() {

    //populates distance over hikes
    for (var index = 0; index < this.currentUser.completedTrails.length; index++) {
      this.lineChartLabels.push(this.currentUser.completedTrails[index].name)
      this.lineChartData.push(this.currentUser.completedTrails[index].distance)
      this.hikeCounter++; 
    }
    //populates elevation over hikes
    for (var index = 0; index < this.currentUser.completedTrails.length; index++) {
      this.barChartLabels.push(this.currentUser.completedTrails[index].name)
      this.barChartData.push(this.currentUser.completedTrails[index].elevation)
    }
  }

  // roundToTwo(num) {    
  //   return +(Math.round(num + "e+2")  + "e-2");
  // }



  //aggregates total distance from table data
  populateDistance() {
    this.distanceTotal = Math.ceil(this.lineChartData.reduce((acc, value) => acc + value, 0) * 100) / 100;
  }

  //aggregates total elevation from table data
  populateElevation() {
    this.elevationTotal = this.barChartData.reduce((acc, value) => acc + value, 0);
  }



  ngOnInit() {
    this.currentUser = this.funFastUserService.currentUser;
    this.populateTables();
    this.populateDistance();
    this.populateElevation();    
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











