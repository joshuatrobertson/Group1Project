import {Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ["Average time of other players", "Your average time"];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [10, 20], label: 'Time without distraction'},
    {data: [15, 25], label: 'Time with distraction'}
  ];

  averageTimes = [0, 0, 0, 0];

  stats: any = [];
  currentdata = null;
  currentIndex = -1;
  title = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.retrieveData();
  }


  retrieveData(): void {

    this.dataService.getOtherPlays().subscribe(
      data => {
        this.stats = data;
        let avgTimes: Array<number> = [0, 0];
        let count = 0;
        let length = this.stats.length;
        let j = 0;
        for (let i = 0; i < length; i++) {
          let lengthSub = this.stats[i].length;
          for (let ii = 0; ii < lengthSub; ii++) {
            avgTimes[0] = avgTimes[0] + this.stats[i][ii].timewithoutdistraction;
            avgTimes[1] = avgTimes[1] + this.stats[i][ii].timewithdistraction;
            count++;
          }
          j = i;
        }
        avgTimes[0] = avgTimes[0]/count;
        avgTimes[1] = avgTimes[1]/count;
        // now let's update the fields
        // this.barChartData[0].data[0] = avgTimes[0];
        // this.barChartData[1].data[0] = avgTimes[1];
        this.averageTimes[0] = avgTimes[0];
        this.averageTimes[1] = avgTimes[1];
        // this.barChartData = [
        //   {data: [avgTimes[0], this.stats[length-1].timewithoutdistraction], label: 'Time Without Distraction'},
        //   {data: [avgTimes[1], this.stats[length-1].timewithdistraction], label: 'Time With Distraction'}
        // ];
      },
      error => {
        console.log(error);
      });

    this.dataService.getPlays().subscribe(
      data => {
        this.stats = data;
        let avgTimes: Array<number> = [0, 0];
        let length = this.stats.length;
        let j = 0;
        for (let i = 0; i < length; i++) {
          avgTimes[0] = avgTimes[0] + this.stats[i].timewithoutdistraction;
          avgTimes[1] = avgTimes[1] + this.stats[i].timewithdistraction;
          j = i;
        }
        avgTimes[0] = avgTimes[0]/length;
        avgTimes[1] = avgTimes[1]/length;
        // now let's update the fields
        // this.barChartData[0].data[1] = avgTimes[0];
        // this.barChartData[1].data[1] = avgTimes[1];
        this.averageTimes[2] = avgTimes[0];
        this.averageTimes[3] = avgTimes[1];
        this.barChartData = [
          {data: [this.averageTimes[0], this.averageTimes[2]], label: 'Time Without Distraction'},
          {data: [this.averageTimes[1], this.averageTimes[3]], label: 'Time With Distraction'}
        ];
        // this.barChartData = [
        //   {data: [avgTimes[0], this.stats[length-1].timewithoutdistraction], label: 'Time Without Distraction'},
        //   {data: [avgTimes[1], this.stats[length-1].timewithdistraction], label: 'Time With Distraction'}
        // ];
      },
      error => {
        console.log(error);
      });


  }
}
