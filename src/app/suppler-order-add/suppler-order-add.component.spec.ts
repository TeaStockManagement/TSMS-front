import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplerOrderAddComponent } from './suppler-order-add.component';

describe('SupplerOrderAddComponent', () => {
  let component: SupplerOrderAddComponent;
  let fixture: ComponentFixture<SupplerOrderAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplerOrderAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplerOrderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
