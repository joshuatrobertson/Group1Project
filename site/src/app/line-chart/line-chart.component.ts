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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.retrieveData();
  }

  retrieveData() {
    this.dataService.getPlays().subscribe(
      data => {
        // this.stats = data;

        var timewithoutdistraction: Array<number> = [10];
        timewithoutdistraction.push(30);
        timewithoutdistraction.push(40);
        timewithoutdistraction.push(20);
        timewithoutdistraction.push(50);

        var timewithdistraction: Array<number> = [20];
        timewithdistraction.push(50);
        timewithdistraction.push(65);
        timewithdistraction.push(25);
        timewithdistraction.push(60);

        var timeofplay: Array<string> = ['1'];
        timeofplay.push('2');
        timeofplay.push('3');
        timeofplay.push('4');
        timeofplay.push('5');

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
