import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDeIndicadorFormComponent } from './registro-de-indicador-form.component';

describe('RegistroDeIndicadorFormComponent', () => {
  let component: RegistroDeIndicadorFormComponent;
  let fixture: ComponentFixture<RegistroDeIndicadorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroDeIndicadorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroDeIndicadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
