<template>
  <NuxtLink :class="`nav nav--${direction}`" :to="to">
    <div :class="`nav__button mdi mdi-chevron-${direction}`" />
  </NuxtLink>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavVue extends Vue {
  @Prop()
  private readonly direction!: 'top' | 'bottom' | 'left' | 'right';

  @Prop()
  private readonly to!: string;
}
</script>

<style lang="scss" scoped>
.nav {
  position: absolute;
  border: solid 5px;
  border-radius: 125px;
  color: $primary;
  padding: 0px 4px;

  &--left, &--right {
    top: 50%;
    transform: translateY(-50%);
    margin: 0 20px;
  }

  &--left {
    left: 0;
  }

  &--right {
    right: 0;
  }

  &__button {
    text-decoration: none;
    color: $primary;
    font-size: 46px;
  }
}
</style>