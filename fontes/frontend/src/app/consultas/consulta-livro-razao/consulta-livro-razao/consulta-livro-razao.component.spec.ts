import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLivroRazaoComponent } from './consulta-livro-razao.component';

describe('ConsultaLivroRazaoComponent', () => {
  let component: ConsultaLivroRazaoComponent;
  let fixture: ComponentFixture<ConsultaLivroRazaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaLivroRazaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaLivroRazaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
