import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsultaLivroRazaoComponent } from './list-consulta-livro-razao.component';

describe('ListConsultaLivroRazaoComponent', () => {
  let component: ListConsultaLivroRazaoComponent;
  let fixture: ComponentFixture<ListConsultaLivroRazaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConsultaLivroRazaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListConsultaLivroRazaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
