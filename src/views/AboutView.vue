<script setup lang="ts">
import { ref } from 'vue';
import ToggleButton from 'primevue/togglebutton'
import InputOtp from 'primevue/inputotp'
  const checked = ref();
  const value = ref();
  
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <InputOtp v-model="value" />

    <ToggleButton v-model="checked" onLabel="I confirm" offLabel="I reject"
    onIcon="pi pi-check" offIcon="pi pi-times" class="w-[9rem]" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
