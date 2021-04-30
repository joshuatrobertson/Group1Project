import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGameMainComponent } from './card-game-main.component';

describe('CardGameMainComponent', () => {
  let component: CardGameMainComponent;
  let fixture: ComponentFixture<CardGameMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGameMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGameMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
