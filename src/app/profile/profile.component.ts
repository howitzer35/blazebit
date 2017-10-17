import { Component, OnInit } from '@angular/core';
import { FunFastUserService } from '../fun-fast-user/fun-fast-user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
// export class ProfileComponent implements OnInit {

  export class ProfileComponent {
    
  currentUser: any; // Probably temporary

  constructor(private funFastUserService: FunFastUserService) { }

    ngOnView() {
      this.currentUser = this.funFastUserService.currentUser;
      console.log("docheck watch")
      console.log(this.funFastUserService.currentUser);
      
    }

  ngOnInit() {
    this.currentUser = this.funFastUserService.currentUser;
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
    console.log(this.funFastUserService.currentUser);
  }

  // Distance over hikes
  public lineChartData:Array<any> = [];
  public lineChartLabels:Array<any> = [];
  public lineChartType:string = 'line';
  
  // Elevation over hikes
  public barChartData:Array<any> = [];
  public barChartLabels:Array<any> = [];
  public barChartType:string = 'bar';

  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}











//THIS IS THE DOUGHNUT STUFF:

      // public doughnutChartType:string = 'doughnut';
      
      //   Pie
      //   public doughnutChartLabels:string[] = ['Hard', 'Moderate', 'Easy'];
      //   public doughnutChartData:number[] = [300, 500, 100];
      
      //   public randomizeType():void {
      //     this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
      //     this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
      //   }







//THIS IS THE ORIGINAL CRAZY LINE CHART WE DON'T NEED ANY LONGER

                // constructor() { }
                
                //   ngOnInit() {
                //   }

              //   // lineChart
              //   public lineChartData:Array<any> = [
              //     {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
              //     {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
              //     {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
              //   ];
              //   public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
              //   public lineChartOptions:any = {
              //     responsive: true
              //   };
              //   public lineChartColors:Array<any> = [
              //     { // grey
              //       backgroundColor: 'rgba(148,159,177,0.2)',
              //       borderColor: 'rgba(148,159,177,1)',
              //       pointBackgroundColor: 'rgba(148,159,177,1)',
              //       pointBorderColor: '#fff',
              //       pointHoverBackgroundColor: '#fff',
              //       pointHoverBorderColor: 'rgba(148,159,177,0.8)'
              //     },
              //     { // dark grey
              //       backgroundColor: 'rgba(77,83,96,0.2)',
              //       borderColor: 'rgba(77,83,96,1)',
              //       pointBackgroundColor: 'rgba(77,83,96,1)',
              //       pointBorderColor: '#fff',
              //       pointHoverBackgroundColor: '#fff',
              //       pointHoverBorderColor: 'rgba(77,83,96,1)'
              //     },
              //     { // grey
              //       backgroundColor: 'rgba(148,159,177,0.2)',
              //       borderColor: 'rgba(148,159,177,1)',
              //       pointBackgroundColor: 'rgba(148,159,177,1)',
              //       pointBorderColor: '#fff',
              //       pointHoverBackgroundColor: '#fff',
              //       pointHoverBorderColor: 'rgba(148,159,177,0.8)'
              //     }
              //   ];
              //   public lineChartLegend:boolean = true;
              //   public lineChartType:string = 'line';
              
              //   public randomize():void {
              //     let _lineChartData:Array<any> = new Array(this.lineChartData.length);
              //     for (let i = 0; i < this.lineChartData.length; i++) {
              //       _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
              //       for (let j = 0; j < this.lineChartData[i].data.length; j++) {
              //         _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
              //       }
              //     }
              //     this.lineChartData = _lineChartData;
              //   }
              
              //   // events
              //   public chartClicked(e:any):void {
              //     console.log(e);
              //   }
              
              //   public chartHovered(e:any):void {
              //     console.log(e);
              //   }  

              // }
