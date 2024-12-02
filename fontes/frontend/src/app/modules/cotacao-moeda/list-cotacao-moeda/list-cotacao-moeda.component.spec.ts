import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCotacaoMoedaComponent } from './list-cotacao-moeda.component';

describe('ListCotacaoMoedaComponent', () => {
  let component: ListCotacaoMoedaComponent;
  let fixture: ComponentFixture<ListCotacaoMoedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCotacaoMoedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCotacaoMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
