<template>
  <div>
    <div ref="layout" class="layout">
      <div class="layout__home">
        <img class="layout__logo" src="@/assets/img/logo.png" alt="logo">
        <h1 class="layout__title">Emilien Leroy</h1>
        <h2 class="layout__subtitle">French Web Developer</h2>
        <p class="layout__scroll">
          Scroll Down
          <span class="mdi mdi-chevron-down" />
        </p>
        <div class="layout__footer" />
        <div ref="particle" class="layout__particle"></div>
      </div>
      <Nuxt class="layout__content" />
      <button 
        :style="{ opacity: contactOpacity }" 
        @click="$modal.show('contact')"
        class="layout__contact" 
        data-scroll 
        data-scroll-call="toggleContact" 
        data-scroll-repeat="true" 
      >
        <span class="mdi mdi-email" />
        Contact
      </button>
    </div>
    <contact-vue />
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator';
import { tsParticles, IOptions, RecursivePartial, DestroyType } from "tsparticles";
import ContactVue from '@/components/contact.vue';
import { ScrollFunction } from '~/plugins/scroll.client';

@Component({
  components: {
    ContactVue,
  },
})
export default class Layout extends Vue {
  @Ref('layout')
  private layout!: HTMLElement;

  @Ref('particle')
  private particle!: HTMLElement;

  private contactOpacity: number = 0;

  private get onScroll(): ScrollFunction {
    return {
      toggleContact: () => {
        this.contactOpacity = this.contactOpacity === 0 ? 1 : 0;
      }
    }
  }

  private particleConfig: RecursivePartial<IOptions> = {
    "detectRetina": true,
    "fpsLimit": 60,
    "particles": {
      "color": {
        "value": "#ffffff7c",
        "animation": {
          "enable": false,
          "speed": 1,
          "sync": true
        }
      },
      "move": {
        "angle": 90,
        "attract": {
          "enable": true,
          "rotate": {
            "x": 600,
            "y": 1200
          }
        },
        "direction": "none",
        "enable": true,
        "outMode": "destroy",
        "random": false,
        "speed": 2,
        "straight": false,
        "trail": {
          "enable": false,
          "length": 10,
          "fillColor": {
            "value": "#000000"
          }
        },
        "vibrate": false,
        "warp": false
      },
      "number": {
        "density": {
          "enable": false,
          "area": 800,
          "factor": 1000
        },
        "limit": 0,
        "value": 0
      },
      "opacity": {
        "animation": {
          "enable": false,
          "minimumValue": 0.1,
          "speed": 1,
          "sync": false
        },
        "random": {
          "enable": true,
          "minimumValue": 0.1
        },
        "value": 0.7
      },
      "rotate": {
        "animation": {
          "enable": false,
          "speed": 0,
          "sync": false
        },
        "direction": "clockwise",
        "path": false,
        "random": false,
        "value": 0
      },
      "size": {
        "animation": {
          "destroy": "min",
          "enable": true,
          "minimumValue": 0,
          "speed": 2,
          "startValue": "max",
          "sync": true
        },
        "random": {
          "enable": true,
          "minimumValue": 1
        },
        "value": 5
      },
      "stroke": {
        "width": 0,
        "color": {
          "value": "#000000",
          "animation": {
            "enable": false,
            "speed": 1,
            "sync": true
          }
        }
      },
      "twinkle": {
        "lines": {
          "enable": false,
          "frequency": 0.05,
          "opacity": 1
        },
        "particles": {
          "enable": false,
          "frequency": 0.05,
          "opacity": 1
        }
      }
    },
    "pauseOnBlur": true,
    "emitters": {
      "direction": "top",
      "life": {},
      "rate": {
        "quantity": 2,
        "delay": 0.3
      },
      "size": {
        "mode": "percent",
        "height": 0,
        "width": 100
      },
      "position": {
        "x": 50,
        "y": 100
      }
    }
  }

  public mounted() {
    this.$particle.set('home', this.particle, this.particleConfig);
    this.$scroll({ el: this.layout, smooth: true }, this.onScroll);
  }
}
</script>

<style lang="scss" scoped>
.layout {
  position: relative;

  &__home {
    width: 100%;
    height: 100vh;
    background-color: $primary;
    color: $white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  &__logo {
    height: 250px;
    width: 250px;
    margin: 15px;
    background-color: #323E4F;
    border-radius: 120px;
    z-index: 5;
  }

  &__title {
    font-family: Brush;
    font-weight: 100;
    font-size: 64px;
    line-height: 1;
  }

  &__subtitle {
    font-family: Roboto, 'sans-serif';
    font-weight: 100;
    opacity: 0.5;
  }

  &__content {
    width: 100%;
    height: 100vh;
    background-color: $white;
  }

  &__footer {
    position: absolute;
    bottom: -1px;
    width: 100%;
    background-color: $white;
    height: 50px;
    box-shadow: 0px 0px 110px -5px #FFFFFF;
    border-top-left-radius: 42px;
    border-top-right-radius: 42px;
  }

  &__scroll {
    position: absolute;
    bottom: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15px;
    font-size: 17px;
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 100;
    opacity: 0.5;

    span {
      opacity: 0.5;
      font-size: 24px;
      animation: slide-bottom 1s ease-in-out;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }

  &__particle {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
  }

  &__contact {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: $primary;
    color: $white;
    border: none;
    border-radius: 10px;
    margin: 25px;
    padding: 7px 10px;
    font-family: Roboto;
    font-weight: 700;
    font-size: 24px;
    text-transform: uppercase;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    transition: all 1s ease;
  }

  @keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(10px);
              transform: translateY(10px);
    }
  }

}
</style>