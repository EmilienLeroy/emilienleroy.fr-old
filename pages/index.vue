<template>
  <div class="nav">
    <nav-vue direction="right" :title="$t('experience.title')" to="/experience" />
    <div class="home">
      <title-vue v-scroll:layout="showHome" class="home__title" :title="$t('home.title')" />
      <paragraph-vue 
        :show="home"
        class="home__text home__text--1" 
        title="home.it.title" 
        content="home.it.content" 
      />
      <div class="home__img">
        <img-vue width="250px" height="250px" caption="It's me" :src="require('@/assets/img/moi.jpg')" />
      </div>
      <paragraph-vue 
        :show="home"
        :delay="0.3"
        class="home__text home__text--2 home__text--right" 
        title="home.passion.title" 
        content="home.passion.content" 
      />
      <paragraph-vue 
        :show="home"
        :delay="0.6"
        class="home__text home__text--3" 
        title="home.other.title" 
        content="home.other.content" 
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import TitleVue from "@/components/title.vue";
import ImgVue from "@/components/img.vue";
import NavVue from '@/components/nav.vue';
import ParagraphVue from '@/components/paragraph.vue';
import { namespace, State } from 'vuex-class';

const viewModule = namespace('view');

@Component({
  components: {
    TitleVue,
    ImgVue,
    NavVue,
    ParagraphVue,
  },
})
export default class Home extends Vue {
  @viewModule.State('home')
  private home!: boolean;

  @viewModule.Mutation('setHome')
  private setHome!: (home: boolean) => void;

  public showHome() {
    this.setHome(true);
  }
}
</script>

<style lang="scss">
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
    align-items: flex-end;
  }
}
</style>
