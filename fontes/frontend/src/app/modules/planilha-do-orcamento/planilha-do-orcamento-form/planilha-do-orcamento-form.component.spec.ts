import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanilhaDoOrcamentoFormComponent } from './planilha-do-orcamento-form.component';

describe('PlanilhaDoOrcamentoFormComponent', () => {
  let component: PlanilhaDoOrcamentoFormComponent;
  let fixture: ComponentFixture<PlanilhaDoOrcamentoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanilhaDoOrcamentoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanilhaDoOrcamentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
