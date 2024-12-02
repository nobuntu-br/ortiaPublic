import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTabelaMoedaComponent } from './list-tabela-moeda.component';

describe('ListTabelaMoedaComponent', () => {
  let component: ListTabelaMoedaComponent;
  let fixture: ComponentFixture<ListTabelaMoedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTabelaMoedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTabelaMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
