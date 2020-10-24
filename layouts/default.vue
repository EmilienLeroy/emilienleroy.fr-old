<template>
  <div ref="layout" class="layout">
    <div class="layout__home">
      <img class="layout__logo" src="@/assets/img/logo.png" alt="logo">
      <h1 class="layout__title">Emilien Leroy</h1>
      <h2 class="layout__subtitle">French Web Developer</h2>
      <p class="layout__scroll">
        Scroll Down
        <span class="mdi mdi-chevron-down"></span>
      </p>
      <div class="layout__footer" />
    </div>
    <Nuxt class="layout__content" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Layout extends Vue {
  public mounted() {
    const layout: Element = this.$refs.layout as Element;
    this.$scroll({
      el: layout,
      smooth: true
    });
  }
}
</script>

<style lang="scss" scoped>
.layout {
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