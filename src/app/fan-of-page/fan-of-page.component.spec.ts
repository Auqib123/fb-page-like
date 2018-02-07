import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanOfPageComponent } from './fan-of-page.component';

describe('FanOfPageComponent', () => {
  let component: FanOfPageComponent;
  let fixture: ComponentFixture<FanOfPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanOfPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanOfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
