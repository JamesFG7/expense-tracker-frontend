<script setup lang="ts">
import {useThemeStore} from "@/stores/theme";

const theme = useThemeStore();
</script>

<template>    
    <div class="toggler-container" @click="theme.toggleTheme()" >
      <i :class="theme.icon" > </i>
      <div class="text">Toggle Theme</div>
    </div>
</template>

<style lang="scss" scoped>
.toggler-container {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    align-items: center;
	i {
		margin-right: 10px;
	}
}
</style>
