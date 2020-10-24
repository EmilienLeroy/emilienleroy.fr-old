import vue from "vue";
import { tsParticles } from "tsparticles";
import { Main } from "tsparticles/dist/main";

vue.prototype.$particle = tsParticles
  
declare module 'vue/types/vue' {
  interface Vue {
    $particle: Main;
  }
}
  