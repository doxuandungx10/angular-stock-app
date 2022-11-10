import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentGraph2Component } from './current-graph2.component';

describe('CurrentGraph2Component', () => {
  let component: CurrentGraph2Component;
  let fixture: ComponentFixture<CurrentGraph2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentGraph2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentGraph2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
