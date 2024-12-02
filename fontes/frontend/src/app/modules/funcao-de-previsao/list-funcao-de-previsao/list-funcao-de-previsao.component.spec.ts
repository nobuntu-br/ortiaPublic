import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFuncaoDePrevisaoComponent } from './list-funcao-de-previsao.component';

describe('ListFuncaoDePrevisaoComponent', () => {
  let component: ListFuncaoDePrevisaoComponent;
  let fixture: ComponentFixture<ListFuncaoDePrevisaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFuncaoDePrevisaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFuncaoDePrevisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
