import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaMoedaFormComponent } from './tabela-moeda-form.component';

describe('TabelaMoedaFormComponent', () => {
  let component: TabelaMoedaFormComponent;
  let fixture: ComponentFixture<TabelaMoedaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaMoedaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaMoedaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
