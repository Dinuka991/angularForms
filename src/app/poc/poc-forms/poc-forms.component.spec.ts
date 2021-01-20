import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocFormsComponent } from './poc-forms.component';

describe('PocFormsComponent', () => {
  let component: PocFormsComponent;
  let fixture: ComponentFixture<PocFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
