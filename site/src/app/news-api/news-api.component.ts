import {Component, OnInit} from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-news-api',
  templateUrl: './news-api.component.html',
  styleUrls: ['./news-api.component.scss']
})
export class NewsApiComponent {

  articleArray: Array<any>;
  sourcesArray: Array<any>;
  singleArticle;

  getRandomArticle(): any {
    return (this.articleArray)[1];
  }

  constructor(private newsapi: NewsApiService){
    console.log('app component constructor called');
    // load articles
    this.newsapi.initArticles().subscribe(data => this.articleArray = data['articles']);
    // load news sources
    this.newsapi.initSources().subscribe(data => this.sourcesArray = data['sources']);
    // Fetch a random article
    this.singleArticle = this.randomNumber(5);
  }

  // Return a random number between - and 'maxNumber'
  randomNumber(maxNumber): number {
    return Math.floor(Math.random() * maxNumber);
  }

}
