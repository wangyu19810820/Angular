import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcheckComponent } from './viewcheck.component';

describe('ViewcheckComponent', () => {
  let component: ViewcheckComponent;
  let fixture: ComponentFixture<ViewcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
