import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ultimos30DiasComponent } from './ultimos-30-dias.component';

describe('Ultimos30DiasComponent', () => {
  let component: Ultimos30DiasComponent;
  let fixture: ComponentFixture<Ultimos30DiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ultimos30DiasComponent]
    });
    fixture = TestBed.createComponent(Ultimos30DiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
