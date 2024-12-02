import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpreendimentoFormComponent } from './empreendimento-form.component';

describe('EmpreendimentoFormComponent', () => {
  let component: EmpreendimentoFormComponent;
  let fixture: ComponentFixture<EmpreendimentoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpreendimentoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpreendimentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
