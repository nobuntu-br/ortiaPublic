import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCentroDeCustoComponent } from './list-centro-de-custo.component';

describe('ListCentroDeCustoComponent', () => {
  let component: ListCentroDeCustoComponent;
  let fixture: ComponentFixture<ListCentroDeCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCentroDeCustoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCentroDeCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
