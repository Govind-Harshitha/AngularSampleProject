import { AppShadowDirective } from './app-shadow.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('AppShadowDirective', () => {
  let ele: ElementRef;
  let render: Renderer2;
  beforeEach(() => {

  });
  it('should create an instance', () => {
    const directive = new AppShadowDirective(ele, render);
    expect(directive).toBeTruthy();
  });
});
