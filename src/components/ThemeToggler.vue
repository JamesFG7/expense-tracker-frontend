<script setup lang="ts">
import {onMounted, ref} from "vue";
import {usePrimeVue} from "primevue/config";
import Button from "primevue/button";



const PrimeVue = usePrimeVue();

const currentTheme = ref(localStorage.getItem('theme'));
const label = ref((localStorage.getItem('theme') === 'aura-dark-purple') ? "Light" : "Dark");
const icon = ref((currentTheme.value === "Dark") ? "pi pi-moon" : "pi pi-sun");
onMounted( () => {
  toggleTheme();
});

const toggleTheme = () => {
  let nextTheme : String;
  if (currentTheme.value === 'aura-dark-purple') {
    nextTheme = 'aura-light-purple';
  }
  else {
    nextTheme = 'aura-dark-purple';
  }
  PrimeVue.changeTheme(currentTheme.value, nextTheme, 'dark-theme-link', () => {console.log(currentTheme)});
  localStorage.setItem('theme', currentTheme.value);
  label.value = (localStorage.getItem('theme') === 'aura-dark-purple') ? "Light" : "Dark"
    icon.value = (currentTheme.value === "aura-dark-purple") ? "pi pi-moon" : "pi pi-sun";
  currentTheme.value = nextTheme;
}
</script>



<template>    
    <div class="toggler-container">
        <Button @click="toggleTheme" outlined severity="contrast"  :icon="icon" aria-label="Filter" />
    </div>
</template>


<style lang="scss" scoped>
button {
    margin-top: 0;
}

.toggler-container {
    display: flex;
    justify-content: flex-end;
    margin: 0.4em;
}
</style>
