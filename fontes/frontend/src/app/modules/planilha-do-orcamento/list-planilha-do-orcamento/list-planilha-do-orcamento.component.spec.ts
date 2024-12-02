import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanilhaDoOrcamentoComponent } from './list-planilha-do-orcamento.component';

describe('ListPlanilhaDoOrcamentoComponent', () => {
  let component: ListPlanilhaDoOrcamentoComponent;
  let fixture: ComponentFixture<ListPlanilhaDoOrcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlanilhaDoOrcamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPlanilhaDoOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
