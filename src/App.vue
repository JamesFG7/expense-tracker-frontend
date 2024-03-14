<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {onMounted, ref} from "vue";
import {usePrimeVue} from "primevue/config";
import Button from "primevue/button";



const PrimeVue = usePrimeVue();

const currentTheme = ref(localStorage.getItem('theme'));
const label = ref((localStorage.getItem('theme') === 'lara-dark-cyan') ? "Light" : "Dark");

onMounted( () => {
  toggleTheme();
});

const toggleTheme = () => {
  let nextTheme;
  if (currentTheme.value === 'lara-dark-cyan') {
    nextTheme = 'lara-light-cyan';
  }
  else {
    nextTheme = 'lara-dark-cyan';
  }
  PrimeVue.changeTheme(currentTheme.value, nextTheme, 'dark-theme-link', () => {console.log(currentTheme)});
  localStorage.setItem('theme', currentTheme.value);
  label.value = (localStorage.getItem('theme') === 'lara-dark-cyan') ? "Light" : "Dark"
  currentTheme.value = nextTheme;
}
</script>

<template>

  <RouterView />
</template>

