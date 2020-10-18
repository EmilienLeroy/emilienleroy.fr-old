import vue from "vue";
import scroll from "locomotive-scroll";
import { Scroll } from '@/types/scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

vue.prototype.$scroll = (params: any) => {
  return new scroll(params);
};

declare module 'vue/types/vue' {
  interface Vue {
    $scroll: (params?: any) => Scroll;
  }
}
