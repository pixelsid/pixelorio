import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsvgComponent } from './websvg.component';

describe('WebsvgComponent', () => {
  let component: WebsvgComponent;
  let fixture: ComponentFixture<WebsvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
