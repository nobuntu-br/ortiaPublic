import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotacaoMoedaFormComponent } from './cotacao-moeda-form.component';

describe('CotacaoMoedaFormComponent', () => {
  let component: CotacaoMoedaFormComponent;
  let fixture: ComponentFixture<CotacaoMoedaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotacaoMoedaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotacaoMoedaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
