<template>
  <div class="nav">
    <nav-vue direction="left" :title="$t('home.title')" to="/" />
    <div class="experience">
      <title-vue title="Experience" />
      <div class="experience__body">
        <timeline-vue :items="['2010', '2011', '2012']" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
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
  private transition: any = {
    name:'fade',
    mode: 'in-out',
  };
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