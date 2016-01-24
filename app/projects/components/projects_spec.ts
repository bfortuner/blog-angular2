import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it,
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {ProjectsCmp} from './projects';

export function main() {
  describe('projects component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then((rootTC) => {
            let projectsDOMEl = rootTC.debugElement.componentViewChildren[0].nativeElement;

            expect(DOM.querySelectorAll(projectsDOMEl, 'h1')[0].textContent).toEqual('Projects');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [ProjectsCmp],
  template: '<div><projects></projects></div>'
})
class TestComponent {}
