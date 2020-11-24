<template>
  <div class="nav">
    <nav-vue direction="left" :title="$t('home.title')" to="/" />
    <nav-vue direction="right" :title="$t('home.title')" to="/" />
    <div class="experience">
      <title-vue title="Experience" />
      <div class="experience__body">
        <div class="experience__content">
          <h2 class="experience__title">{{ item }}</h2>
          <h3 class="experience__subtitle">{{ $t(`experience.${item}.title`) }}</h3>
          <p class="experience__text">{{ $t(`experience.${item}.content`) }}</p>
        </div>
        <timeline-vue :index.sync="index" :items="items" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import TitleVue from '@/components/title.vue';
import NavVue from '@/components/nav.vue';
import TimelineVue from '@/components/timeline.vue';

@Component({
  transition: {
    name:'fade',
    mode: 'out-in',
  },
  components: {
    TitleVue,
    NavVue,
    TimelineVue
  }
})
export default class ExpericenceVue extends Vue {
  private index: number = 0;
  private items: number[] = [2014, 2015, 2016, 2017, 2018 , 2019 , 2020];

  private get item() {
    return this.items[this.index] ? this.items[this.index] : {};
  }
} 
</script>

<style lang="scss" scoped>
.experience {
  padding: 20px 145px;
  height: 100%;

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: calc(100% - 110px);
    padding: 20px;
  }

  &__content {
    padding: 0 70px;
    font-family: Roboto;
    color: $primary;
  }

  &__title {
    font-weight: bold;
    font-size: 72px;
    font-style: italic;
    line-height: 0.9;
  }

  &__subtitle {
    font-weight: bold;
    font-size: 48px;
  }

  &__text {
    margin-top: 20px;
    font-weight: 300;
    font-size: 20px;
  }
}
</style>