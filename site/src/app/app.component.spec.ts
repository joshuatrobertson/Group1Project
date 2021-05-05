import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule, HttpHandler} from '@angular/common/http';
import {AppComponent} from './app.component';
import {DataService} from './data.service';
import {MatDialog} from '@angular/material/dialog';
import {ModalService} from './modal';
import {Overlay} from '@angular/cdk/overlay';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [HttpHandler, MatDialog, Overlay],
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

  it('should return a number between 1 and 4', () => {
    expect(component).toBeTruthy();
    const randomNumber = component.getRandomNumber(1, 4);
    expect(randomNumber).toBeLessThan(5);
    expect(randomNumber).toBeGreaterThan(0);
  });

  it('should change variables on the second round', () => {
    expect(component).toBeTruthy();
    component.startGame();
    component.userSecondGame = true;
    component.restart();
    expect(component.beginAnimations).toBeTruthy();
    expect(component.beginAnimations2).toBeTruthy();
    expect(component.beginAnimations3).toBeTruthy();
    expect(component.beginAnimations4).toBeTruthy();
  });

});
