<template>
  <div class="layout">
    <div class="layout__home">
      <img class="layout__logo" src="@/assets/img/logo.png" alt="logo">
      <h1 class="layout__title">Emilien Leroy</h1>
      <h2 class="layout__subtitle">French Web Developer</h2>
    </div>
    <Nuxt class="layout__content" />
  </div>
</template>

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
}
</style>