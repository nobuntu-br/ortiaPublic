import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsuarioDoEstabelecimentoComponent } from './list-usuario-do-estabelecimento.component';

describe('ListUsuarioDoEstabelecimentoComponent', () => {
  let component: ListUsuarioDoEstabelecimentoComponent;
  let fixture: ComponentFixture<ListUsuarioDoEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUsuarioDoEstabelecimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUsuarioDoEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
