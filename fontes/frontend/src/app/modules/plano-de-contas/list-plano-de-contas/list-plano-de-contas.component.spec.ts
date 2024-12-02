import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanoDeContasComponent } from './list-plano-de-contas.component';

describe('ListPlanoDeContasComponent', () => {
  let component: ListPlanoDeContasComponent;
  let fixture: ComponentFixture<ListPlanoDeContasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlanoDeContasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPlanoDeContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
