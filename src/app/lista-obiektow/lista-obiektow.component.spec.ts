import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaObiektowComponent } from './lista-obiektow.component';

describe('ListaObiektowComponent', () => {
  let component: ListaObiektowComponent;
  let fixture: ComponentFixture<ListaObiektowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaObiektowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaObiektowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
