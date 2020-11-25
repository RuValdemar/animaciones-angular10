import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoAnimacionComponent } from './modo-animacion.component';

describe('ModoAnimacionComponent', () => {
  let component: ModoAnimacionComponent;
  let fixture: ComponentFixture<ModoAnimacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModoAnimacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModoAnimacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
