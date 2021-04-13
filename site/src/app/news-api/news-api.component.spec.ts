import { TestBed } from '@angular/core/testing';
import { NewsApiComponent } from './news-api.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NewsApiComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NewsApiComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should render title', () => {
    const fixture = TestBed.createComponent(NewsApiComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('news app is running!');
  });
});
