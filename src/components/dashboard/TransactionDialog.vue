<script lang="ts" setup>
import { useTransactionStore } from '@/stores/transaction';
import { computed, ref } from 'vue'

const transactionProps = defineProps<{id?: number}>();
const transaction = useTransactionStore()
const isAdd = computed(() => transactionProps?.id === undefined)
const transactionValue = ref({id: '', date: '', type: '', amount: '', category: ''});

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
            <Calendar v-model="transactionValue.date" showIcon iconDisplay="input" placeholder="Select Date"/>
        </div>
        <div class="dialog-input-container">
            <label for="username" class="dialog-input-label">Amount</label>
            <InputNumber v-model="transactionValue.amount" inputId="currency-ph" mode="currency" currency="PHP" locale="en-PH"  placeholder="Input Amount"  />
        </div>
        <div class="dialog-input-container">
            <label for="username" class="dialog-input-label">Transaction Type</label>
            <SelectButton v-model="transactionValue.type" :options="['Income', 'Expenses']" aria-labelledby="basic" />
        </div>
        <div class="dialog-input-container">
            <label for="category" class="dialog-input-label">Category</label>
            <Dropdown v-model="transactionValue.category" :options="transaction.categories" optionLabel="name" placeholder="Select a Category"/>
        </div>
        <template #footer>
            <Button label="Cancel" outlined severity="primary" @click="transaction.toggleVisibility()" autofocus />
			<Button v-if="isAdd" label="Add" severity="primary" @click="transaction.addTransaction()" autofocus />
			<Button v-else label="Update" severity="primary"  @click="transaction.updateTransaction()" autofocus />
        </template>
    </Dialog>
</template>

<style>
</style>