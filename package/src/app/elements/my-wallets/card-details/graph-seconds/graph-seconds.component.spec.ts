import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphSecondsComponent } from './graph-seconds.component';

describe('GraphSecondsComponent', () => {
  let component: GraphSecondsComponent;
  let fixture: ComponentFixture<GraphSecondsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphSecondsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphSecondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
