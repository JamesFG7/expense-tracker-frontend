<script lang="ts" setup>
import { useTransactionStore } from '@/stores/transaction';
import { computed, ref } from 'vue'
const transactionProps = defineProps<{id?: number}>();

const transaction = useTransactionStore()
const isAdd = computed(() => transactionProps.id === undefined)
const date = ref();
const amount = ref();
const type = ref();
const category = ref();

const categories = ref([
	{ name: 'Entertainment'},
	{ name: 'Salary'},
	{ name: 'Food' },
	{ name: 'Rent' },
]);

function saveFunction() {
    transaction.toggleVisibility();
    //handle pinia action -> wherein the action will send the request. (transactionUpdate) 
    //or remove this function and call the action inline @click
}
</script>
<template>    
    <Dialog v-model:visible="transaction.dialogVisibility" modal :header="isAdd ? 'Add Transaction' : 'Update Transaction'" :style="{ width: '25rem' }">
        <template #header>
            <div class="dialog-header-title">
                <i class="pi pi-credit-card"></i>
                <div class="dialog-header-text">{{ transactionProps.id === undefined ? "Add" : "Update" }} Transaction </div>
            </div>
        </template>
        <div class="dialog-input-container">
            <label for="username" class="dialog-input-label">Date</label>
            <Calendar v-model="date" showIcon iconDisplay="input" placeholder="Select Date"/>
        </div>
        <div class="dialog-input-container">
            <label for="username" class="dialog-input-label">Amount</label>
            <InputNumber v-model="amount" inputId="currency-ph" mode="currency" currency="PHP" locale="en-PH"  placeholder="Input Amount"  />
        </div>
        <div class="dialog-input-container">
            <label for="username" class="dialog-input-label">Transaction Type</label>
            <SelectButton v-model="type" :options="['Income', 'Expenses']" aria-labelledby="basic" />
        </div>
        <div class="dialog-input-container">
            <label for="category" class="dialog-input-label">Category</label>
            <Dropdown v-model="category" :options="categories" optionLabel="name" placeholder="Select a Category"/>
        </div>
        <template #footer>
            <Button label="Cancel" outlined severity="primary" @click="transaction.toggleVisibility()" autofocus />
            <Button label="Save" severity="primary" @click="saveFunction()" autofocus />
        </template>
    </Dialog>
</template>

<style>
</style>