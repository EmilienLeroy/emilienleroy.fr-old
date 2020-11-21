<template>
  <div class="nav">
    <nav-vue direction="left" :title="$t('home.title')" to="/" />
    <div class="experience">
      <title-vue title="Experience" />
      <div class="experience__body">
        <timeline-vue :item.sync="index" :items="items" />
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
  private items: string[] = ['2014', '2015', '2016', '2017', '2018', '2019', '2020'];
} 
</script>

<style lang="scss" scoped>
.experience {
  padding: 20px 145px;
  max-width: 1400px;
  height: 100%;

  &__body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 110px);;
  }
}
</style>