import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it,
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {PostsCmp} from './posts';

export function main() {
  describe('posts component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then((rootTC) => {
            let postsDOMEl = rootTC.debugElement.componentViewChildren[0].nativeElement;

            expect(DOM.querySelectorAll(postsDOMEl, 'h2')[0].textContent).toEqual('Posts');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [PostsCmp],
  template: '<div><posts></posts></div>'
})
class TestComponent {}
