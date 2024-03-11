<script setup lang="ts">
import Button from 'primevue/button';

import { usePrimeVue } from 'primevue/config';
import { ref } from 'vue';

const PrimeVue = usePrimeVue();

const theme = ref(localStorage.getItem('theme'));
const toggleTheme = () => {
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : localStorage.setItem('theme', 'Dark'); 
    if(currentTheme == 'Dark'){
        PrimeVue.changeTheme(currentTheme, 'lara-light-cyan', 'light-theme-link', () => { console.log('to light');});
        localStorage.setItem('theme', 'Light');
    }
    else {
        PrimeVue.changeTheme(currentTheme, 'lara-dark-cyan', 'dark-theme-link', () => {console.log('to dark');});
        localStorage.setItem('theme', 'Dark');
    }
    theme.value = localStorage.getItem('theme');
}
</script>

<template>
    <Button @click="toggleTheme" :label="theme" />
</template>
