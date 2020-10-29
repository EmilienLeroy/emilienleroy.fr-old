<template>
  <div class="home">
    <title-vue title='About me' />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleVue from '@/components/title.vue';

@Component({
  components: {
    TitleVue,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  padding: 20px 40px;
}
</style>
