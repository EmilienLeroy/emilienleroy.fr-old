<template>
  <div class="home">
    <div class="home__content">
      <div class="home__text">
        <title-vue title='About me' />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eius quas, repellat voluptate deserunt accusantium odio doloribus est velit, eveniet beatae. Enim debitis ipsum incidunt quam molestiae itaque, voluptatem illum.</p>
      </div>
      <img-vue width="300px" height="300px" caption="It's me" :src="require('@/assets/img/moi.jpg')" />
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleVue from '@/components/title.vue';
import ImgVue from '@/components/img.vue';

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

  &__content {
    display: flex;
  }
}
</style>
