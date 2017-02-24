import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HargaComponent } from './harga.component';

describe('HargaComponent', () => {
  let component: HargaComponent;
  let fixture: ComponentFixture<HargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
