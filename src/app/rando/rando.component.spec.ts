import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandoComponent } from './rando.component';

describe('RandoComponent', () => {
  let component: RandoComponent;
  let fixture: ComponentFixture<RandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
