<script setup lang="ts">
import { RouterView } from 'vue-router'
import {onMounted, ref} from "vue";
import {usePrimeVue} from "primevue/config";

const PrimeVue = usePrimeVue();
const currentTheme = ref((localStorage.getItem('theme') === 'aura-dark-purple') ? "Light" : "Dark");
const label = ref((localStorage.getItem('theme') === 'aura-dark-purple') ? "Light" : "Dark");

onMounted( () => {
  toggleTheme();
});

const toggleTheme = () => {
  let nextTheme: String;
  if (currentTheme.value === 'aura-dark-purple') {
    nextTheme = 'lara-light-cyan';
  }
  else {
    nextTheme = 'aura-dark-purple';
  }
  PrimeVue.changeTheme(currentTheme.value, nextTheme, 'dark-theme-link', () => {console.log(currentTheme)});
  localStorage.setItem('theme', currentTheme.value);
  label.value = (localStorage.getItem('theme') === 'aura-dark-purple') ? "Light" : "Dark"
  currentTheme.value = nextTheme;
}
</script>

<template>

  <RouterView />
</template>

