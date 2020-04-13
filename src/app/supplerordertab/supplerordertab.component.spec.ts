import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplerordertabComponent } from './supplerordertab.component';

describe('SupplerordertabComponent', () => {
  let component: SupplerordertabComponent;
  let fixture: ComponentFixture<SupplerordertabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplerordertabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplerordertabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
