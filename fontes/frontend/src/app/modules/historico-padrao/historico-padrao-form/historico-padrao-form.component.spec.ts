import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoPadraoFormComponent } from './historico-padrao-form.component';

describe('HistoricoPadraoFormComponent', () => {
  let component: HistoricoPadraoFormComponent;
  let fixture: ComponentFixture<HistoricoPadraoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoPadraoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoPadraoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
