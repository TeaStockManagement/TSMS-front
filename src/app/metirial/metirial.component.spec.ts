import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetirialComponent } from './metirial.component';

describe('MetirialComponent', () => {
  let component: MetirialComponent;
  let fixture: ComponentFixture<MetirialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetirialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetirialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
