<template>
  <component :is='tag' class="letters">
		<span
      v-for="(letter, index) in letters" 
      :key="index" 
      v-html="letter"
      :style="{
        transition: `all ${speed}s ease`,
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0px)' : 'translateY(10px)',
        transitionDelay: `${delay + (index / 35)}s`
      }" 
    />
	</component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LettersVue extends Vue {
	@Prop()
	private readonly text!: string;

	@Prop({ default: false })
  private readonly show?: boolean;
  
  @Prop({ default: 'div' })
  private readonly tag!: string;

  @Prop({ default: 0.3 })
  private readonly speed!: number;

  @Prop({ default: 0 })
  private readonly delay!: number;

	private get letters() {
    let letters: string[] = [];
    this.text.split(' ').forEach(t => {
      letters = [...letters, ...t.split(''), '&nbsp;'];
    });
		return letters;
	}
}
</script>

<style lang="scss" scoped>
.letters {
  display: flex;
  flex-wrap: wrap;
}
</style>