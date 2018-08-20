import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentcheckComponent } from './contentcheck.component';

describe('ContentcheckComponent', () => {
  let component: ContentcheckComponent;
  let fixture: ComponentFixture<ContentcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
