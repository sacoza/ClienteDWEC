import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatetstNewsComponent } from './latetst-news.component';

describe('LatetstNewsComponent', () => {
  let component: LatetstNewsComponent;
  let fixture: ComponentFixture<LatetstNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatetstNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatetstNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
