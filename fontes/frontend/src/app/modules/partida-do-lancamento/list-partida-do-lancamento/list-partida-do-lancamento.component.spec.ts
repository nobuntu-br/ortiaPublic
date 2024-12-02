import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPartidaDoLancamentoComponent } from './list-partida-do-lancamento.component';

describe('ListPartidaDoLancamentoComponent', () => {
  let component: ListPartidaDoLancamentoComponent;
  let fixture: ComponentFixture<ListPartidaDoLancamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPartidaDoLancamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPartidaDoLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
