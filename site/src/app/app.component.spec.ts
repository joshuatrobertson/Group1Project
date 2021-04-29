import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // Make sure the application is created
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Set the title as card-game-new
  it(`should have as title 'card-game-new'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('card-game-new');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('card-game-new app is running!');
  });

  // Make sure the application is created
  it('begin animation variables should be set to false', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.beginAnimations).toBeTruthy();
    expect(app.beginAnimations2).toBeTruthy();
    expect(app.beginAnimations3).toBeTruthy();
  });

  // Make sure the application is created
  it('begin sound variables should be set to true', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.beginSound).toBeFalsy();
    expect(app.beginSound2).toBeFalsy();
    expect(app.beginSound3).toBeFalsy();
  });

});
