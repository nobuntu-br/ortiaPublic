import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoDeContasFormComponent } from './plano-de-contas-form.component';

describe('PlanoDeContasFormComponent', () => {
  let component: PlanoDeContasFormComponent;
  let fixture: ComponentFixture<PlanoDeContasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanoDeContasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoDeContasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
