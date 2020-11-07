<template>
  <div class="nav">
    <nav-vue direction="right" title="experienxe" to="/" />
    <div class="home">
      <title-vue class="home__title" title="About me" />
      <div class="home__text home__text--1">
        <h3>{{ $t('home.it.title') }}</h3>
        <p>{{ $t('home.it.content') }}</p>
      </div>
      <img-vue
        class="home__img"
        width="300px"
        height="300px"
        caption="It's me"
        :src="require('@/assets/img/moi.jpg')"
      />
      <div class="home__text home__text--2 home__text--right">
        <h3>{{ $t('home.passion.title') }}</h3>
        <p>{{ $t('home.passion.content') }}</p>
      </div>
      <div class="home__text home__text--3">
        <h3>{{ $t('home.other.title') }}</h3>
        <p>{{ $t('home.other.content') }}</p>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TitleVue from "@/components/title.vue";
import ImgVue from "@/components/img.vue";
import NavVue from '@/components/nav.vue';

@Component({
  components: {
    TitleVue,
    ImgVue,
    NavVue,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  padding: 20px 145px;
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.3fr auto;
  grid-template-rows: auto 1fr 1fr 1fr;
  grid-gap: 10px 0px;
  gap: 10px 0px;
  height: 100vh;

  &__content {
    display: flex;
    justify-content: space-between;
  }

  &__text {
    font-family: Roboto;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &--1 {
      grid-area: 2 / 1 / 3 / 2; 
    }

    &--2 {
      grid-area: 3 / 1 / 4 / 3;
    }

    &--3 {
       grid-area: 4 / 1 / 5 / 3;
    }

    &--title {
      margin: 50px 10px;
    }

    &--right {
      h3 {
        text-align: right;
      }

      p {
        text-align: right;
      }
    }

    h3 {
      color: $primary;
      font-weight: bold;
      font-size: 36px;
      text-transform: uppercase;
    }

    p {
      font-weight: 300;
      font-size: 24px;
    }
  }

  &__title {
    grid-area: 1 / 1 / 2 / 2;
  }

  &__img {
    margin: 25px 20px 0px 40px;
    grid-area: 1 / 2 / 3 / 3;
    display: flex;
  }
}
</style>
