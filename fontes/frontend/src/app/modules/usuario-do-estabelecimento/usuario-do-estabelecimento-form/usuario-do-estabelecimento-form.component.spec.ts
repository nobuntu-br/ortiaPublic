import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDoEstabelecimentoFormComponent } from './usuario-do-estabelecimento-form.component';

describe('UsuarioDoEstabelecimentoFormComponent', () => {
  let component: UsuarioDoEstabelecimentoFormComponent;
  let fixture: ComponentFixture<UsuarioDoEstabelecimentoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioDoEstabelecimentoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioDoEstabelecimentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
