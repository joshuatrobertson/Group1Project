import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  apiKey = '0c1958f0e7e64edf9ba43bf573fbd608';
  // backup key
  //apiKey = '28cabbff7add46febde4eb4e84536f71';

  newsSources: Array<string> = ['entertainment-weekly', 'mtv-news', 'mtv-news-uk', 'next-big-future', 'reddit-r-all', 'vice-news'];

  getRandomNewsSource(): any {
    return (this.newsSources)[Math.floor(Math.random() * this.newsSources.length)];
  }


  constructor(private http: HttpClient) { }
  // Initialise the sources
  initSources(): any {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.apiKey);
  }
  initArticles(): any {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + this.getRandomNewsSource() + '&apiKey=' + this.apiKey);
  }

  getArticlesByID(source: string): any {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.apiKey);
  }
}
