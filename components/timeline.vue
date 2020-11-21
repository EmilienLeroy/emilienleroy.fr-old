<template>
  <div class="timeline">
    <template v-for="(item, index) in items">
      <div 
        class="timeline__item"
        :class="{'timeline__item--disable': itemSync < index  }" 
        :key="index" 
        @click="itemSync = index"
      >
        <p class="timeline__text">{{ item }}</p>
        <div class="timeline__round" />
      </div>
      <div 
        v-if="index !== items.length - 1"
        class="timeline__line" 
        :class="{'timeline__line--disable': itemSync <= index  }"
        :key="`line-${index}`" 
      >
        <div class="line" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue, Watch } from 'vue-property-decorator';

@Component
export default class TimelineVue extends Vue {
  @PropSync('item', { default: 0 })
  private itemSync!: number;

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
    transition: all 1s ease;
    cursor: pointer;

    &--disable {
      opacity: 0.5;
    }
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
    transition: all 1s ease;

    &--disable {
      opacity: 0.5;
    }

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