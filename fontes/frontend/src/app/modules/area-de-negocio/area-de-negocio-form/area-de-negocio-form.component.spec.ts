import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDeNegocioFormComponent } from './area-de-negocio-form.component';

describe('AreaDeNegocioFormComponent', () => {
  let component: AreaDeNegocioFormComponent;
  let fixture: ComponentFixture<AreaDeNegocioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaDeNegocioFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaDeNegocioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
