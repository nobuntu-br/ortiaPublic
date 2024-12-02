import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidaDoLancamentoFormComponent } from './partida-do-lancamento-form.component';

describe('PartidaDoLancamentoFormComponent', () => {
  let component: PartidaDoLancamentoFormComponent;
  let fixture: ComponentFixture<PartidaDoLancamentoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidaDoLancamentoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidaDoLancamentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
