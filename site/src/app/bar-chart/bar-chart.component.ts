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
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  stats: any = [];
  currentdata = null;
  currentIndex = -1;
  title = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.retrieveData();
  }

  retrieveData() {
    this.dataService.getPlays().subscribe(
        data => {
          this.stats = data;
          let avgTimes: Array<number> = [0,0];
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
          this.barChartLabels = ["Average Time", "Last attempt"];
          this.barChartData = [
            {data: [avgTimes[0], this.stats[length-1].timewithoutdistraction], label: 'Time Without Distraction'},
            {data: [avgTimes[1], this.stats[length-1].timewithdistraction], label: 'Time With Distraction'}
          ];
        },
        error => {
          console.log(error);
        });
  }
}
