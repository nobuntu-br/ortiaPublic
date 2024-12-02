import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegistroDeIndicadorComponent } from './list-registro-de-indicador.component';

describe('ListRegistroDeIndicadorComponent', () => {
  let component: ListRegistroDeIndicadorComponent;
  let fixture: ComponentFixture<ListRegistroDeIndicadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRegistroDeIndicadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRegistroDeIndicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
