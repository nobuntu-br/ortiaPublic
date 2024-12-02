import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAreaDeNegocioComponent } from './list-area-de-negocio.component';

describe('ListAreaDeNegocioComponent', () => {
  let component: ListAreaDeNegocioComponent;
  let fixture: ComponentFixture<ListAreaDeNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAreaDeNegocioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAreaDeNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
