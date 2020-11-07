<template>
  <div @mouseover="isHover = true" @mouseleave="isHover = false">
    <NuxtLink :to="to" :class="`nav nav--${direction}`">
      <div class="nav__title">
        <span
          v-for="(letter, index) in letters" 
          :key="index" 
          :style="{
            transition: 'all 0.3s ease',
            opacity: isHover ? 1 : 0,
            transform: isHover ? 'translateY(0px)' : 'translateY(10px)',
            transitionDelay: `${index / 35}s`
          }" 
        >
          {{ letter }}
        </span>
      </div>
      <div :class="`nav__background ${isHover ? 'nav__background--hover' : ''} `" />
      <div :class="`nav__button mdi mdi-chevron-${direction} ${isHover ? 'nav__button--hover' : ''}`" />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class NavVue extends Vue {
  private isHover: boolean = false;

  @Prop()
  private readonly direction!: 'left' | 'right';

  @Prop()
  private readonly to!: string;

  @Prop()
  private readonly title!: string;

  private get letters() {
    return this.title.split('');
  }
}
</script>

<style lang="scss" scoped>

$transition: all 0.5s cubic-bezier(.08,.71,.38,.97);

.nav {
  position: absolute;
  border: solid 5px;
  border-radius: 125px;
  color: $primary;
  padding: 0px 4px;
  transition: $transition;

  &--left, &--right {
    top: 50%;
    transform: translateY(-50%);
    margin: 0 40px;
  }

  &--left {
    left: 0;
  }

  &--right {
    right: 0;
  }

  &__title {
    position: absolute;
    top: -33px;
    opacity: 1;
    width: 115px;
    left: -30px;
    text-align: center;
    font-family: Roboto;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 19px;
    transition: $transition;
    display: flex;
  }

  &__button {
    position: relative;
    text-decoration: none;
    color: $primary;
    font-size: 46px;
    z-index: 1;
    transition: $transition;
    
    &--hover {
      color: $white;
    }
  }

  &__background {
    top: -2px;
    left: -2px;
    opacity: 0;
    width: calc(100% + 4px);
    height: calc(100% + 4px);  
    border-radius: 100px;
    position: absolute;
    background-color: $primary;
    transition: $transition;
    transform: scale(0);
    transform-origin: center;
    z-index: 0;

    &--hover {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>