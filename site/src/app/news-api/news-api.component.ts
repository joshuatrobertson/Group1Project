import {Component, OnInit} from '@angular/core';
import {NewsApiService} from './news-api.service';

@Component({
  selector: 'app-news-api',
  templateUrl: './news-api.component.html',
  styleUrls: ['./news-api.component.scss']
})
export class NewsApiComponent {

  mArticles: Array<any>;
  mSources: Array<any>;
  singleArticle;

  getRandomArticle(): any {
    return (this.mArticles)[1];
  }

  constructor(private newsapi: NewsApiService){
    console.log('app component constructor called');
    // load articles
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    // load news sources
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
    // Fetch a random article
    this.singleArticle = this.randomNumber(5);
  }

  randomNumber(maxNumber): number {
    return Math.floor(Math.random() * maxNumber);
  }

}
