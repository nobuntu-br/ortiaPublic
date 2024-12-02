import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpreendimentoComponent } from './list-empreendimento.component';

describe('ListEmpreendimentoComponent', () => {
  let component: ListEmpreendimentoComponent;
  let fixture: ComponentFixture<ListEmpreendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmpreendimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEmpreendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
