<template>
  <div class="title">
    <h2 class="title__text">{{ title }}</h2>
    <div class="title__pick pick">
      <div class="pick__base" />
      <div class="pick__mask pick__mask--left" />
      <div class="pick__mask pick__mask--right" />
    </div>
    <div class="title__triangle triangle">
      <div class="triangle__base" />
      <div class="triangle__mask triangle__mask--left" />
      <div class="triangle__mask triangle__mask--right" />
    </div>
    <div ref="particle" class="title__particle"></div>
  </div>
</template>

<script lang="ts">
import { IOptions, RecursivePartial } from 'tsparticles';
import { Component, Prop, Ref, Vue } from 'vue-property-decorator';

@Component
export default class TitleVue extends Vue {
  @Ref('particle')
  private particle!: HTMLElement;

  @Prop()
  private readonly title!: string;

  public mounted() {
    this.$particle.set('title', this.particle, this.particleConfig);
  }

  private particleConfig: RecursivePartial<IOptions> = {
    "detectRetina": true,
    "fpsLimit": 60,
    "particles": {
      "color": {
        "value": "#323E4F",
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
        "speed": 1,
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
      "size": {
        "animation": {
          "destroy": "min",
          "enable": true,
          "minimumValue": 0,
          "speed": 8,
          "startValue": "max",
          "sync": true
        },
        "random": {
          "enable": true,
          "minimumValue": 1
        },
        "value": 5
      },
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
}
</script>

<style lang="scss" scoped>
.title {
  position: relative;
  color: $primary;
  font-family: Roboto;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  font-size: 32px;
  padding: 10px 30px;
  border-radius: 20px;
  box-shadow: 0px 9px 0px 0px $primary;
  font-weight: lighter;

  &__particle{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  &__triangle{
    position: absolute;
    left: calc(50% - 15px);
    bottom: -25px;

    .triangle {
      position: relative;
      
      &__base{
        height: 15px;
        width: 30px;
        background-color: $primary;
        box-shadow: 0px -2px $primary;
      }

      &__mask {
        position: absolute;
        height: 16px;
        width: 15px;
        top: 0;
        background-color: $white;

        &--left {
          left: 0px;
          border-radius: 0px 50px 0 0px;
        }

        &--right {
          right: 0px;
          border-radius: 40px 0px 0px 0px;
        }
      }
    }
  }

  &__pick{
    position: absolute;
    left: calc(50% - 15px);
    bottom: -11px;
    
    .pick {
      position: relative;
      
      &__base{
        width: 30px;
        background-color: $white;
        height: 11px;
        box-shadow: 0px -4px $white;
      }

      &__mask {
        position: absolute;
        height: 10px;
        width: 15px;
        top: 0;
        background-color: $primary;

        &--left {
          left: 0;
          border-radius: 0px 50px 0 0px;
        }

        &--right {
          right: 0;
          border-radius: 40px 0px 0px 0px;
        }
      }
    }
  }
}
</style>