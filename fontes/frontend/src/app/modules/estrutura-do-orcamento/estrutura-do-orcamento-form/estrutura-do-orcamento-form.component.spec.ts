import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturaDoOrcamentoFormComponent } from './estrutura-do-orcamento-form.component';

describe('EstruturaDoOrcamentoFormComponent', () => {
  let component: EstruturaDoOrcamentoFormComponent;
  let fixture: ComponentFixture<EstruturaDoOrcamentoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstruturaDoOrcamentoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstruturaDoOrcamentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
