<template>
  <transition name="slide-up" appear >
    <component 
			:is="tag" 
			v-show="show" 
			:style="{ 
				transition: `all ${speed}s ease`,
				transitionDelay: `${delay}s`
			}"
			>
      <slot  />
    </component>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SlideVue extends Vue {
  @Prop({ default: 0 })
  private readonly delay!: number;

  @Prop({ default: 'div' })
  private readonly tag!: string;

  @Prop({ default: false })
	private readonly show!: boolean;
	
	@Prop({ default: 0.5 })
	private readonly speed!: number;
}
</script>

<style lang="scss" scoped>
.slide-up {

  &-leave, &-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  &-leave-to {
    opacity: 0;
  }

  &-enter {
    opacity: 0;
    transform: translateY(20px);
  }
}
</style>
