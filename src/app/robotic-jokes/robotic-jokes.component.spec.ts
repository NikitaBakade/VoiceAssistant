import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticJokesComponent } from './robotic-jokes.component';

describe('RoboticJokesComponent', () => {
  let component: RoboticJokesComponent;
  let fixture: ComponentFixture<RoboticJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboticJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboticJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
