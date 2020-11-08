<template>
  <div>
    <slide-vue tag="h3" :delay="delay + 0.2" :speed="1" :show="show">{{ $t(title) }}</slide-vue>
    <slide-vue tag="p" :delay="delay + 0.4" :speed="1" :show="show">{{ $t(content) }}</slide-vue>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LettersVue from './letters.vue';
import SlideVue from './slide.vue';

@Component({
  components: {
    SlideVue,
  }
})
export default class ParagraphVue extends Vue {
  @Prop({ default: 0 })
  private readonly delay!: number;

  @Prop({ default: false })
  private readonly show!: boolean;

  @Prop()
  private readonly title!: string;

  @Prop()
  private readonly content!: string;
}
</script>