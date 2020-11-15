<template>
  <div class="img">
    <div class="img__filter" :style="{ width: width, height: height }">
      <figure class="filter">
        <figcaption class="filter__caption" v-if="caption">{{ caption }}</figcaption>
      </figure>
    </div>
    <img :src="src" :width="width" :height="height" >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ImgVue extends Vue {
  @Prop()
  private readonly src!: string;

  @Prop({ default: '100%' })
  private readonly width!: string;

  @Prop({ default: '100%' })
  private readonly height!: string;

  @Prop()
  private readonly caption?: string;
}
</script>

<style lang="scss" scoped>
.img {
  position: relative;

  &__filter {
    position: absolute;
    top: 0;
    left: 0;
    padding: 15px;
    
    .filter {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      background: linear-gradient(180deg, rgba(50, 62, 79, 0.07) 0%, #333F50 120%);

      &__caption {
        color: white;
        width: 100%;
        display: flex;
        height: 100%;
        align-items: flex-end;
        justify-content: flex-end;
        padding: 10px 15px;
        font-size: 20px;
        font-family: 'Roboto';
        font-style: italic;
      }
    }
  }

  img {
    padding: 15px;
    border-radius: 40px;
    box-shadow: 10px 0px 0px 0px #323E4F, -10px 0 0px 0px #323E4F;
  }
}
</style>