<script lang="ts" setup>
import { useTransactionStore } from '@/stores/transaction';
import {computed} from 'vue'
import {useToast} from "primevue/usetoast";

const transactionProps = defineProps<{id?: number}>();
const toast = useToast();
const transaction = useTransactionStore()
const isAdd = computed(() => transactionProps?.id === undefined)

function addTransaction(): void{
	if (isFormDataValid()) {
		transaction.addTransaction(transaction.transactionPlaceholder);
		toast.add({ severity: 'success', summary: 'Success!', detail: 'Transaction successfully added', life: 3000 });
		transaction.emptyTransactionPlaceholder();
	}
	else {
		toast.add({ severity: 'error', summary: 'Error', detail: 'Some fields are required', life: 3000 });
	}
}
function updateTransaction(): void{
	if (isFormDataValid()) {
		transaction.updateTransaction(transaction.transactionPlaceholder);
		toast.add({ severity: 'success', summary: 'Success!', detail: 'Transaction successfully updated', life: 3000 })
		transaction.emptyTransactionPlaceholder();
	}
	else {
		toast.add({ severity: 'error', summary: 'Error', detail: 'Some fields are required', life: 3000 });
	}
}

function isFormDataValid(): boolean{
	return (transaction.transactionPlaceholder.date !== null && transaction.transactionPlaceholder.type !== null && transaction.transactionPlaceholder.amount !== null && transaction.transactionPlaceholder.category !== null);
}

</script>
<template>
	<Toast />
    <Dialog v-model:visible="transaction.dialogVisibility" modal :header="isAdd ? 'Add Transaction' : 'Update Transaction'" :style="{ width: '25rem' }">
        <template #header>
            <div class="dialog-header-title">
                <i class="pi pi-credit-card"></i>
                <div class="dialog-header-text">{{ transactionProps.id === undefined ? "Add" : "Update" }} Transaction </div>
            </div>
        </template>
        <div class="dialog-input-container">
            <label for="username" class="dialog-input-label">Date</label>
            <Calendar v-model="transaction.transactionPlaceholder.date" showIcon iconDisplay="input" placeholder="Select Date"/>
        </div>
        <div class="dialog-input-container">
            <label for="username" class="dialog-input-label">Amount</label>
            <InputNumber v-model="transaction.transactionPlaceholder.amount" inputId="currency-ph" mode="currency" currency="PHP" locale="en-PH"  placeholder="Input Amount" />
        </div>
        <div class="dialog-input-container">
            <label for="username" class="dialog-input-label">Transaction Type</label>
            <SelectButton v-model="transaction.transactionPlaceholder.type" :options="['Income', 'Expenses']" aria-labelledby="basic" />
        </div>
        <div class="dialog-input-container">
            <label for="category" class="dialog-input-label">Category</label>
            <Dropdown v-model="transaction.transactionPlaceholder.category" :options="transaction.categories.sort()" placeholder="Select a Category" filter checkmark/>
        </div>
        <template #footer>
            <Button label="Cancel" outlined severity="primary" @click="transaction.toggleVisibility();
	transaction.emptyTransactionPlaceholder();" autofocus />
			<Button v-if="isAdd" label="Add" severity="primary" @click="addTransaction()" autofocus />
			<Button v-else label="Update" severity="primary"  @click="updateTransaction()" autofocus />
        </template>
    </Dialog>
</template>

<style lang="scss">

.p-dialog-footer {
	padding: 1rem 1.5rem 1.5rem 1.5rem;
	button {
		width: 100%;
	}
}
.p-dropdown {
	width: 100%;
	background: none;
	margin: 10px 0 7px 0;
}
</style>