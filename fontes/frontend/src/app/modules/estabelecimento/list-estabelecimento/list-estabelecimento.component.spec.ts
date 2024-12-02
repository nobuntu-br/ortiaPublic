import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEstabelecimentoComponent } from './list-estabelecimento.component';

describe('ListEstabelecimentoComponent', () => {
  let component: ListEstabelecimentoComponent;
  let fixture: ComponentFixture<ListEstabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEstabelecimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
