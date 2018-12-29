import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalsvgComponent } from './digitalsvg.component';

describe('DigitalsvgComponent', () => {
  let component: DigitalsvgComponent;
  let fixture: ComponentFixture<DigitalsvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalsvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalsvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
