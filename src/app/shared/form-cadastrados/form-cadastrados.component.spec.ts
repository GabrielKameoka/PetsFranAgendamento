import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastradosComponent } from './form-cadastrados.component';

describe('FormCadastradosComponent', () => {
  let component: FormCadastradosComponent;
  let fixture: ComponentFixture<FormCadastradosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCadastradosComponent]
    });
    fixture = TestBed.createComponent(FormCadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
