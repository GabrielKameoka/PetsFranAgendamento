import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestePrecoComponent } from './teste-preco.component';

describe('TestePrecoComponent', () => {
  let component: TestePrecoComponent;
  let fixture: ComponentFixture<TestePrecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestePrecoComponent]
    });
    fixture = TestBed.createComponent(TestePrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
