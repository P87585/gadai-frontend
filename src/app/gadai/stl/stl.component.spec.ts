import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StlComponent } from './stl.component';

describe('StlComponent', () => {
  let component: StlComponent;
  let fixture: ComponentFixture<StlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
