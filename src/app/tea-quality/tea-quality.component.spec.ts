import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaQualityComponent } from './tea-quality.component';

describe('TeaQualityComponent', () => {
  let component: TeaQualityComponent;
  let fixture: ComponentFixture<TeaQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
