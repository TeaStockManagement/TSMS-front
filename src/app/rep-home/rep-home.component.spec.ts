import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepHomeComponent } from './rep-home.component';

describe('RepHomeComponent', () => {
  let component: RepHomeComponent;
  let fixture: ComponentFixture<RepHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
