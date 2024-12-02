import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncaoDePrevisaoFormComponent } from './funcao-de-previsao-form.component';

describe('FuncaoDePrevisaoFormComponent', () => {
  let component: FuncaoDePrevisaoFormComponent;
  let fixture: ComponentFixture<FuncaoDePrevisaoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncaoDePrevisaoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncaoDePrevisaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
