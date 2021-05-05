import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NewsApiService} from './news-api.service';

describe('NewsApiService', () => {
  let injector: TestBed;
  let service: NewsApiService;
  let httpMock: HttpTestingController;

  // Set up
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsApiService]
    });
    injector = getTestBed();
    service = injector.get(NewsApiService);
    httpMock = injector.get(HttpTestingController);
  });

  // Create the component
  it('should be created', () => {
    const newsService: NewsApiService = TestBed.get(NewsApiService);
    expect(newsService).toBeTruthy();
  });

  // Make sure there are no outstanding requests
  afterEach(() => {
    httpMock.verify();
  });

  describe('Fetch the News Items', () => {
    it('should return a list of articles', () => {
      service.initArticles().subscribe(articles => {
        expect(articles.length).toBe(3);
      });
      it('should return a list of sources', () => {
        service.initSources().subscribe(articles => {
          expect(articles.length).toBeGreaterThan(5);
        });
    });
  });


});


