import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RCBComponent } from './rcb.component';

describe('RCBComponent', () => {
  let component: RCBComponent;
  let fixture: ComponentFixture<RCBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RCBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RCBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
