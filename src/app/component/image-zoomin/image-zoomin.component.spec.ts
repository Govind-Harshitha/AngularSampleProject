import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageZoominComponent } from './image-zoomin.component';

describe('ImageZoominComponent', () => {
  let component: ImageZoominComponent;
  let fixture: ComponentFixture<ImageZoominComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageZoominComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageZoominComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
