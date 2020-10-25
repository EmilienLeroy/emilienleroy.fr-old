<template>
  <client-only>
    <modal height="75%" width="50%" name="contact" classes="contact">
      <h2 class="contact__title">
        <span class="mdi mdi-email" />
        Contact
      </h2>
    </modal>
  </client-only>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ContactVue extends Vue {}
</script>

<style lang="scss">
.contact {
  border-radius: 20px !important;
  padding: 30px;
  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.25) !important;

  &__title {
    width: fit-content;
    background-color: $primary;
    color: $white;
    font-family: Roboto;
    text-transform: uppercase;
    font-weight: 900;
    padding: 7px 10px;
    border-radius: 10px;
    font-size: 32px;
  }
}
</style>