import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSKComponent } from './csk.component';

describe('CSKComponent', () => {
  let component: CSKComponent;
  let fixture: ComponentFixture<CSKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSKComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
