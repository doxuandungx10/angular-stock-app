import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphOthersComponent } from './graph-others.component';

describe('GraphOthersComponent', () => {
  let component: GraphOthersComponent;
  let fixture: ComponentFixture<GraphOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
