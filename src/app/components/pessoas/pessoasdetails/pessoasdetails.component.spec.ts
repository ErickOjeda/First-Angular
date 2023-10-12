import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasdetailsComponent } from './pessoasdetails.component';

describe('PessoasdetailsComponent', () => {
  let component: PessoasdetailsComponent;
  let fixture: ComponentFixture<PessoasdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoasdetailsComponent]
    });
    fixture = TestBed.createComponent(PessoasdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
