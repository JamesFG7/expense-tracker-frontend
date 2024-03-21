<script setup lang="ts">
import TransactionTable from "@/components/dashboard/TransactionTable.vue";

</script>

<template>
	<div class="dashboard-header">
		<div class="title">
		Transaction Summary
		</div>
	</div>
	<div class=" px-4 pb-1 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 md:col-6 lg:col-4">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Total Income</span>
                        <div class="text-900 font-medium text-green-500 text-xl">+₱234.00</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-green-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-arrow-down-left text-green-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-500">last 24 hours</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-4">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Total Expenses</span>
                        <div class="text-900 font-medium text-red-500 text-xl">-₱250.00</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-red-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-arrow-up-right text-red-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-500">last 24 hours</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-4">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Remaining Balance</span>
                        <div class="text-900 font-medium text-xl">₱250.00</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-wallet text-purple-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-500">newly registered</span>
            </div>
        </div>
    </div>
</div>
	<TransactionTable page="summary"/>
</template>

<style lang="scss">

</style>