import vue from "vue";
import scroll from "locomotive-scroll";
import { Scroll } from '@/types/scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface ScrollFunction {
  [key: string]: (...params: any) => void
}

vue.prototype.$scroll = (params: any, scrollFunction: ScrollFunction) => {
  const scrollInstance = new scroll(params);

  if (scrollFunction) {
    scrollInstance.on('call', (caller: [string] | string) => bindScrollFunction(scrollFunction, caller));
  }

  return scrollInstance;
};

function bindScrollFunction(scrollFunction: ScrollFunction, caller: [string] | string) {
  if(Array.isArray(caller)) {
    const name = caller[0];
    caller.splice(0,1);
    return scrollFunction[name](...caller);
  }

  scrollFunction[caller]();
}

declare module 'vue/types/vue' {
  interface Vue {
    $scroll: (params?: any, bindingFunction?: ScrollFunction) => Scroll;
  }
}

export {
  ScrollFunction
}