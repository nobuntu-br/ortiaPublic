import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLivroRazaoFormComponent } from './consulta-livro-razao-form.component';

describe('ConsultaLivroRazaoFormComponent', () => {
  let component: ConsultaLivroRazaoFormComponent;
  let fixture: ComponentFixture<ConsultaLivroRazaoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaLivroRazaoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaLivroRazaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
