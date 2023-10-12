import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosdetailsComponent } from './livrosdetails.component';

describe('LivrosdetailsComponent', () => {
  let component: LivrosdetailsComponent;
  let fixture: ComponentFixture<LivrosdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivrosdetailsComponent]
    });
    fixture = TestBed.createComponent(LivrosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
