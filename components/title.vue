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
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TitleVue extends Vue {
  @Prop()
  private readonly title!: string;
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