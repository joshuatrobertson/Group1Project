import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {


  public lineChartOptions = {
    fill: false
  };
  public lineChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public lineChartType = 'line';
  // public lineChartLegend = true;
  public lineChartData = [
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

  retrieveData(): void {
    this.dataService.getPlays().subscribe(
      data => {
        this.stats = data;

        let length = this.stats.length;

        let timewithoutdistraction: Array<number> = [this.stats[0].timewithoutdistraction];
        let timewithdistraction: Array<number> = [this.stats[0].timewithdistraction];
        let timeofplay: Array<string> = [this.stats[0].timeofplay];

        for (let i = 1; i < length; i++) {
          timewithoutdistraction.push(this.stats[i].timewithoutdistraction);
          timewithdistraction.push(this.stats[i].timewithdistraction);
          timeofplay.push(this.stats[i].timeofplay);
        }

        this.lineChartLabels = timeofplay;
        this.lineChartData = [
          {data: timewithoutdistraction, label: 'Time Without Distraction'},
          {data: timewithdistraction, label: 'Time With Distraction'}
        ];
      },
      error => {
        console.log(error);
      });
  }

}
