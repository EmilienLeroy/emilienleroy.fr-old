<template>
  <div class="home">
    <title-vue class="home__title" title="About me" />
    <div class="home__text home__text--1">
      <h3>It since 2014</h3>
      <p>
        Passionate since childhood by new technologies and computing, I decided
        to dedicate my studies to this area. In the past few years, I have
        acquired skills as a developer and network administrator. Thanks to the
        sandwich course I currently take part in, I have the opportunity to get
        familiar with the world of companies while continuing my studies.
      </p>
    </div>
    <img-vue
      class="home__img"
      width="300px"
      height="300px"
      caption="It's me"
      :src="require('@/assets/img/moi.jpg')"
    />

    <div class="home__text home__text--2 home__text--right">
      <h3>It since 2014</h3>
      <p>
        Passionate since childhood by new technologies and computing, I decided
        to dedicate my studies to this area. In the past few years, I have
        acquired skills as a developer and network administrator. Thanks to the
        sandwich course I currently take part in, I have the opportunity to get
        familiar with the world of companies while continuing my studies.
      </p>
    </div>
    <div class="home__text home__text--3">
      <h3>It since 2014</h3>
      <p>
        Passionate since childhood by new technologies and computing, I decided
        to dedicate my studies to this area. In the past few years, I have
        acquired skills as a developer and network administrator. Thanks to the
        sandwich course I currently take part in, I have the opportunity to get
        familiar with the world of companies while continuing my studies.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TitleVue from "@/components/title.vue";
import ImgVue from "@/components/img.vue";

@Component({
  components: {
    TitleVue,
    ImgVue,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  padding: 20px 40px;
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.3fr auto;
  grid-template-rows: auto 1fr 1fr 1fr;
  gap: 10px 0px;

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
