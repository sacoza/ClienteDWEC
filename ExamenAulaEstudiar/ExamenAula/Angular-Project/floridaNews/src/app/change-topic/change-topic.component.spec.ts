import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTopicComponent } from './change-topic.component';

describe('ChangeTopicComponent', () => {
  let component: ChangeTopicComponent;
  let fixture: ComponentFixture<ChangeTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
