import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it,
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {BioCmp} from './bio';

export function main() {
  describe('bio component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then((rootTC) => {
            let bioDOMEl = rootTC.debugElement.componentViewChildren[0].nativeElement;

            expect(DOM.querySelectorAll(bioDOMEl, 'h2')[0].textContent).toEqual('Bio');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [BioCmp],
  template: '<div><bio></bio></div>'
})
class TestComponent {}
