import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroslistComponent } from './livroslist.component';

describe('LivroslistComponent', () => {
  let component: LivroslistComponent;
  let fixture: ComponentFixture<LivroslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivroslistComponent]
    });
    fixture = TestBed.createComponent(LivroslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
