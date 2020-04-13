import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplerDetailsComponent } from './suppler-details.component';

describe('SupplerDetailsComponent', () => {
  let component: SupplerDetailsComponent;
  let fixture: ComponentFixture<SupplerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
