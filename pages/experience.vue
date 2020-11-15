<template>
  <div class="nav">
    <nav-vue direction="left" :title="$t('home.title')" to="/" />
    <div class="experience">
      <title-vue title="Experience" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleVue from '@/components/title.vue';
import NavVue from '@/components/nav.vue';

@Component({
  components: {
    TitleVue,
    NavVue,
  }
})
export default class ExpericenceVue extends Vue {} 
</script>

<style lang="scss" scoped>
.experience {
  padding: 20px 145px;
  max-width: 1400px;
}
</style>