import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.css']
})
export class EndGameComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickButtonBarChart= function () {
    this.router.navigate(['/bar-chart']);
  };

  clickButtonLineChart= function () {
    this.router.navigate(['/line-chart']);
  };

  clickButtonHome= function () {
    this.router.navigateByUrl('/home');
  };
}
