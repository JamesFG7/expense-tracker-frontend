<script setup lang="ts">
import dateFormat from "dateformat";
import {useConfirm} from "primevue/useconfirm";
import {useToast} from "primevue/usetoast";
import TransactionDialog from "./TransactionDialog.vue";
import {useTransactionStore} from '@/stores/transaction';
import {onMounted, ref} from "vue";

const tableProps = defineProps<{page: string}>();
const confirm = useConfirm();
const toast = useToast();
const transaction = useTransactionStore()
const id = ref<number | undefined>();
const leadingDigits = /\d(?=(\d{3})+\.)/g;

function formatDate (date: Date) : string {
	return dateFormat(date, "dddd, dd mmm yyyy");
}
function confirmDelete(id: number): void{
	confirm.require({
		message: 'Do you want to delete this record?',
		header: 'Danger Zone',
		icon: 'pi pi-info-circle',
		rejectLabel: 'Cancel',
		acceptLabel: 'Delete',
		rejectClass: 'p-button-secondary p-button-outlined',
		acceptClass: 'p-button-danger',
		accept: () => {
			toast.add({ severity: 'error', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
			transaction.deleteTransaction(id)
		},
	});
};
function updateButton(idParam: number): void{
	const transactionFound = transaction.transactions[transaction.transactions.findIndex((transaction: { id: number }) => transaction.id === idParam)];
	if(transactionFound){
		transaction.transactionPlaceholder = {...transactionFound};
		transaction.toggleVisibility();
		id.value = idParam;
	}
	else {
		toast.add({ severity: 'error', summary: 'Error!', detail: 'Invalid ID', life: 3000 });
	}
}

function addButton(): void{
	transaction.emptyTransactionPlaceholder();
	id.value = undefined;
	transaction.toggleVisibility();

}
onMounted(() => {
	transaction.setTransactions();
})

</script>

<template>
	<Toast />
	<ConfirmDialog></ConfirmDialog>
	<TransactionDialog :id='id'/>
	<div class="dashboard-header">
		<div class="title">
			Transaction History
		</div>
		<Button label="Add Transaction" v-if="tableProps.page==='transaction'" icon="pi pi-plus" @click="addButton" />
	</div>
	<div class="card">
		<DataTable size="large" :value="transaction.transactions" tableStyle="min-width: 50rem" lazy>
			<Column field="date" header="Date">
				<template #body="slotProps">
					{{ formatDate(slotProps.data.date)}}
				</template>
			</Column>
			<Column field="type" header="Type">
				<template #body="slotProps">
					<i  v-if="slotProps.data.type === 'Expenses'" class="pi pi-arrow-up type-icon expense"></i>
					<i  v-else class="pi pi-arrow-down type-icon income"></i>
					{{ slotProps.data.type}}
				</template>
			</Column>
			<Column field="category" header="Category"></Column>
			<Column field="amount">
				<template #header>
					<div class="header-title">
						<i class="pi pi-credit-card" style="margin-right: 5px;"></i>
						<div class="header-text">Amount</div>
					</div>
				</template>
				<template #body="slotProps">
					<div class="amount" :style="{ color: slotProps.data.type === 'Expenses' ? '#dc2626' : '#059669' }">
						{{ slotProps.data.type === "Expenses" ? "-" : "+" }}₱{{ slotProps.data.amount.toFixed(2).replace(leadingDigits, '$&,')}}
					</div>
				</template>
			</Column>
			<Column field="action" header="Actions" v-if="tableProps.page==='transaction'">
				<template #body="slotProps">
					<ButtonGroup>
						<Button  @click="updateButton(slotProps.data.id)"  label="Edit" icon="pi pi-pencil" severity="success" />
						<Button @click="confirmDelete(slotProps.data.id)" label="Delete" icon="pi pi-trash"  severity="danger"/>
					</ButtonGroup>
				</template>
			</Column>
			<template #empty>
				<div class="empty">
					You have no Transactions.
				</div>
			</template>
		</DataTable>
	</div>
</template>


<style lang="scss">
.dashboard-header {
	display: flex;
	margin: 15px 0;
	align-items: center;
	justify-content: space-between;
	.title {
		font-size: 27px;
	}
	button {
		padding: 10px 10px;
	}

}
.type-icon {
	padding: 5.5px;
	font-size: 10.5px;
	color: white;
	border-radius: 1000px;
	margin-right: 5px
}

.expense {
	padding: 5.5px;
	font-size: 10.5px;
	background: #dc2626;
	color: white;
	border-radius: 1000px;
	margin-right: 5px
}
.income {
	padding: 5.5px;
	font-size: 10.5px;
	background:#059669;
	color: white;
	border-radius: 1000px;
	margin-right: 5px
}
table.p-datatable-table {
	border-radius: 10px;
	overflow: hidden;
	thead.p-datatable-thead{
		tr {
			th {
				background: var(--text-color);
				color: var(--surface-card);
			}
		}
	}
	.empty {
		filter: brightness(0.4);
		display: flex;
		justify-content: center;
		padding: 20px 0;
		font-weight: 300;
		font-size: 23px;
	}
}
.header-title {
	display:flex;
	align-items: center;
	.header-text {
		margin-left: 4px;
	}
}
.dialog-header-title{
	font-size: 25px;
	display: flex;
	align-items: center;
	i {
		font-size: 15px;
		padding: 15px;
		background: var(--highlight-bg);
		border-radius: 2000px;
		margin-right: 13px;
	}
}
.dialog-input-container {
	margin-top: 15px;
	padding: 0 10px;
	.dialog-input-label {
		font-weight: 500;
		font-size: 17px;
	}
	input, span{
		width:100%;
		margin: 5px 0 7px 0;
	}
	.p-selectbutton {
		background: none;
		margin: 5px 0 7px 0;
		padding: 0;
		div {
			width: 50%;
			//background: none;
			//border: none;
		}
		div:nth-child(1){
		}

		div:nth-child(1){
		}
	}
}
</style>