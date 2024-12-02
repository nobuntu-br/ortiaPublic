import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoContabilFormComponent } from './lancamento-contabil-form.component';

describe('LancamentoContabilFormComponent', () => {
  let component: LancamentoContabilFormComponent;
  let fixture: ComponentFixture<LancamentoContabilFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancamentoContabilFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LancamentoContabilFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
