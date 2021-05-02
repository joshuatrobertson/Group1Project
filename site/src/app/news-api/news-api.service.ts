import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  apiKey;

  apiKeys: Array<string> = ['1a566dd2a11c4173b47ada5f97e6940a', '28cabbff7add46febde4eb4e84536f71', 'dc1f675523b34b66aea3c2bbd19287fb', '5f8da9d2125e467c86013bd97115f254'];

  newsSources: Array<string> = ['entertainment-weekly', 'mtv-news', 'mtv-news-uk', 'next-big-future', 'reddit-r-all', 'vice-news'];

  getRandomNewsSource(): any {
    return (this.newsSources)[Math.floor(Math.random() * this.newsSources.length)];
  }

  getRandomKey(): void {
    this.apiKey = (this.apiKeys)[Math.floor(Math.random() * this.apiKeys.length)];
  }

  constructor(private http: HttpClient) {
    this.getRandomKey();
  }
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
