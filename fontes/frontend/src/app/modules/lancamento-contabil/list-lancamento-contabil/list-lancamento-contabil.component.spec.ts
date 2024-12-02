import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLancamentoContabilComponent } from './list-lancamento-contabil.component';

describe('ListLancamentoContabilComponent', () => {
  let component: ListLancamentoContabilComponent;
  let fixture: ComponentFixture<ListLancamentoContabilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLancamentoContabilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLancamentoContabilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
