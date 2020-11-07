<template>
  <div>
		<span
      v-for="(letter, index) in letters" 
      :key="index" 
      :style="{
        transition: 'all 0.3s ease',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0px)' : 'translateY(10px)',
        transitionDelay: `${index / 35}s`
      }" 
    >
      {{ letter }}
    </span>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LettersVue extends Vue {
	@Prop()
	private readonly text!: string;

	@Prop({ default: false })
	private readonly show?: boolean;

	private get letters() {
		return this.text.split('');
	}
}
</script>