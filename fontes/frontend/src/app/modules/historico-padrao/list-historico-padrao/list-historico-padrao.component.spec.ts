import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHistoricoPadraoComponent } from './list-historico-padrao.component';

describe('ListHistoricoPadraoComponent', () => {
  let component: ListHistoricoPadraoComponent;
  let fixture: ComponentFixture<ListHistoricoPadraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHistoricoPadraoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHistoricoPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
