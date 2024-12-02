import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroDeCustoFormComponent } from './centro-de-custo-form.component';

describe('CentroDeCustoFormComponent', () => {
  let component: CentroDeCustoFormComponent;
  let fixture: ComponentFixture<CentroDeCustoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroDeCustoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroDeCustoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
