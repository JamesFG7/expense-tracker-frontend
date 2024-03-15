<script setup lang="ts">
import {onMounted, ref} from "vue";
import {usePrimeVue} from "primevue/config";
import Button from "primevue/button";

const PrimeVue = usePrimeVue();

const darkTheme = "aura-dark-purple";
const lightTheme = "aura-light-purple";
const currentTheme = ref(localStorage.getItem('theme') || darkTheme);
const icon = ref((currentTheme.value === darkTheme) ? "pi pi-moon" : "pi pi-sun");
const isDarkTheme = ref(localStorage.getItem("theme") === darkTheme);
const label = ref(isDarkTheme.value ? lightTheme : darkTheme);

onMounted(() => {
  toggleTheme();
});

const toggleTheme = () => {
  let nextTheme: string;
  if (currentTheme.value === darkTheme) {
    nextTheme = lightTheme;
  } else {
    nextTheme = darkTheme;
  }
  PrimeVue.changeTheme(currentTheme.value, nextTheme, "dark-theme-link");
  localStorage.setItem("theme", currentTheme.value);
  label.value = isDarkTheme.value ? lightTheme : darkTheme;
  icon.value = currentTheme.value === darkTheme ? "pi pi-moon" : "pi pi-sun";
  currentTheme.value = nextTheme;
};
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
