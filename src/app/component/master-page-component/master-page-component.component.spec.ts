import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageComponentComponent } from './master-page-component.component';

describe('MasterPageComponentComponent', () => {
  let component: MasterPageComponentComponent;
  let fixture: ComponentFixture<MasterPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
