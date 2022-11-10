import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickTransferCrousalComponent } from './quick-transfer-crousal.component';

describe('QuickTransferCrousalComponent', () => {
  let component: QuickTransferCrousalComponent;
  let fixture: ComponentFixture<QuickTransferCrousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickTransferCrousalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickTransferCrousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
