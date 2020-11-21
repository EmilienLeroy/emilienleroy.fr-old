<template>
  <div class="timeline">
    <template v-for="(item, index) in items">
      <div class="timeline__item" :key="index">
        <p class="timeline__text">{{ item }}</p>
        <div class="timeline__round" />
      </div>
      <div class="timeline__line" :key="`line-${index}`" v-if="index !== items.length - 1">
        <div class="line" />
      </div>
    </template>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';

@Component
export default class TimelineVue extends Vue {
  @PropSync('item')
  private itemSync!: string;

  @Prop({ default: () => [] })
  private readonly items!: string[];
}
</script>

<style lang="scss" scoped>
.timeline {
  display: flex;
  width: 100%;
  justify-content: space-between;

  &__item {
    position: relative;
    display: flex;
    justify-content: center;
  }

  &__text {
    font-family: Roboto;
    font-weight: 900;
    font-style: italic;
    font-size: 24px;
    color: $primary;
  }

  &__round {
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: $primary;
    text-align: center;
    top: 45px;
    border-radius: 100px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &__line {
    width: 100%;
    position: relative;

    .line {
      position: relative;
      width: 100%;
      height: 7px;
      top: 54px;
      border-radius: 100px;
      background-color: #323E4F;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>