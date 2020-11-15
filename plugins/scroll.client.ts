import vue from "vue";
import scroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface ScrollFunction {
  [key: string]: (arg?: string) => void;
}

interface ScrollInstances {
  [key: string]: scroll
}

interface ScrollListeners {
  [key: string]: ScrollFunction;
}

const scrollInstances: ScrollInstances = {};
const scrollListeners: ScrollListeners = {};

vue.directive('scroll', {
  bind(el, binding) {
    if (binding.arg) {
      el.setAttribute('data-scroll', '');
      el.setAttribute('data-scroll-call', binding.expression);
    }

    if(!binding.arg) {
      scrollInstances[binding.value] = new scroll({ el, smooth: true });
      scrollListeners[binding.value] = {};
      scrollInstances[binding.value].on('call', (caller) => {
        bindScrollFunction(scrollListeners[binding.value], caller);
      })
    }
  },
  inserted(el, binding) {
    if (binding.arg && scrollInstances[binding.arg] && binding.value) {
      scrollListeners[binding.arg][binding.expression] = binding.value;
    }
  },
})

function bindScrollFunction(scrollFunction: ScrollFunction, caller: [string] | string) {
  if (Array.isArray(caller)) {
    const name = caller[0];
    caller.splice(0,1);
    return scrollFunction[name](...caller);
  }

  scrollFunction[caller]();
}

export {
  ScrollFunction
}