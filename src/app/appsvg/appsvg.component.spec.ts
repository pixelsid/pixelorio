import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsvgComponent } from './appsvg.component';

describe('AppsvgComponent', () => {
  let component: AppsvgComponent;
  let fixture: ComponentFixture<AppsvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppsvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
