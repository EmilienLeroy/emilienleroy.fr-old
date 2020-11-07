import vue from "vue";
import scroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';

const scrollInstances: { [key: string]: scroll } = {}

interface ScrollFunction {
  [key: string]: any
}

vue.directive('scroll', {
  bind(el, binding, vnode) {
    if(binding.arg) {
      el.setAttribute('data-scroll', '');
      el.setAttribute('data-scroll-call', binding.expression);
    }

    if(!binding.arg) {
      scrollInstances[binding.value] = new scroll({ el, smooth: true });
    }
  },
  inserted(el, binding, vnode) {
    if(binding.arg) {
      const scrollInstance = scrollInstances[binding.arg];
      if (scrollInstance && vnode.context) {
        scrollInstance.on('call', (caller: [string] | string) => bindScrollFunction(vnode.context!, caller))
      }
    }
  }
})

function bindScrollFunction(scrollFunction: ScrollFunction, caller: [string] | string) {
  if(Array.isArray(caller)) {
    const name = caller[0];
    caller.splice(0,1);
    return scrollFunction[name](...caller);
  }

  scrollFunction[caller]();
}

export {
  ScrollFunction
}