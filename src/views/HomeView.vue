<script setup lang="ts">
import Button from 'primevue/button';

</script>

<template>
  <router-link to="/login">
    <Button label="Login" />
  </router-link>
  <router-link to="/signup">
    <Button label="Sign Up" />
  </router-link>

</template>
