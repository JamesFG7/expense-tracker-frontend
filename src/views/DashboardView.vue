<script lang="ts" setup>
    import { ref } from 'vue';
	import NavBar from "@/components/NavBar.vue";
	import Transactions from "@/components/dashboard/Transactions.vue";
	import Summary from "@/components/dashboard/Summary.vue";

	const active = ref(0);
	const items = ref([
		{ label: 'Summary', icon: 'pi pi-home' },
		{ label: 'Transactions', icon: 'pi pi-chart-line' },
	]);
</script>

<template>
	<NavBar />
	<div class="card">
		<TabMenu v-model:activeIndex="active" :model="items" />
	</div>
	<div v-if="active == 0" class="tabmenu-overlay">
		<Summary />
	</div>
	<div v-if="active == 1" class="tabmenu-overlay">
		<Transactions />
	</div>
</template>

<style>
.tabmenu-overlay {
	padding:30px 20px;
}
</style>