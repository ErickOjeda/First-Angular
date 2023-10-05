import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroDetailsComponent } from './carro-details.component';

describe('CarroDetailsComponent', () => {
  let component: CarroDetailsComponent;
  let fixture: ComponentFixture<CarroDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarroDetailsComponent]
    });
    fixture = TestBed.createComponent(CarroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
