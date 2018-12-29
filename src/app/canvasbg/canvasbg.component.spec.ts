import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasbgComponent } from './canvasbg.component';

describe('CanvasbgComponent', () => {
  let component: CanvasbgComponent;
  let fixture: ComponentFixture<CanvasbgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasbgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
