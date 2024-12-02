import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjetoComponent } from './list-projeto.component';

describe('ListProjetoComponent', () => {
  let component: ListProjetoComponent;
  let fixture: ComponentFixture<ListProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProjetoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
