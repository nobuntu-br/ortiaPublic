import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEstruturaDoOrcamentoComponent } from './list-estrutura-do-orcamento.component';

describe('ListEstruturaDoOrcamentoComponent', () => {
  let component: ListEstruturaDoOrcamentoComponent;
  let fixture: ComponentFixture<ListEstruturaDoOrcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEstruturaDoOrcamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEstruturaDoOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
