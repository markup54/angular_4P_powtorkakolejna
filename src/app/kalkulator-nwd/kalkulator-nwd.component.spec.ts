import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalkulatorNwdComponent } from './kalkulator-nwd.component';

describe('KalkulatorNwdComponent', () => {
  let component: KalkulatorNwdComponent;
  let fixture: ComponentFixture<KalkulatorNwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalkulatorNwdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KalkulatorNwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
