import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentAnotherComponent } from './child-component-another.component';

describe('ChildComponentAnotherComponent', () => {
  let component: ChildComponentAnotherComponent;
  let fixture: ComponentFixture<ChildComponentAnotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponentAnotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponentAnotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
