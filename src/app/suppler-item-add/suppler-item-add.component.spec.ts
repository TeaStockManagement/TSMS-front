import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplerItemAddComponent } from './suppler-item-add.component';

describe('SupplerItemAddComponent', () => {
  let component: SupplerItemAddComponent;
  let fixture: ComponentFixture<SupplerItemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplerItemAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplerItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
