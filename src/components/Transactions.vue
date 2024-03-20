<script setup lang="ts">
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import {compile, computed, ref} from "vue";
import TransactionDialog from "./TransactionDialog.vue";
import { useTransactionStore } from '@/stores/transaction';

const confirm = useConfirm();
const toast = useToast();
const transaction = useTransactionStore()



const products = [{
		id: 1,
		date: "Tuesday, 28 Feb 2023",
		type: "Expenses",
		category: "Entertainment",
		amount: 200,
	}, {
		id: 2,
		date: "Tuesday, 28 Feb 2023",
		type: "Income",
		category: "Entertainment",
		amount: 50000,
}];
const categories = ref([
	{ name: 'Entertainment'},
	{ name: 'Salary'},
	{ name: 'Food' },
	{ name: 'Rent' },
]);
const handleEdit = (clickedId: number) => {
    id.value = clickedId;
    transaction.toggleVisibility();
};
const id = ref<number | undefined>();
const confirmDelete = (id : number) => {
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
			console.log(id);
		},
	});
};

</script>

<template>
	<Toast />
	<ConfirmDialog></ConfirmDialog>
	<TransactionDialog :id='id'/>
	<div class="dashboard-header">
		<div class="title">
		Transaction History
		</div>
		<Button label="Add Transaction" icon="pi pi-plus" @click="transaction.toggleVisibility(); id = undefined;" />
	
	</div>
	<div class="card">
		<DataTable size="large" :value="products" tableStyle="min-width: 50rem" lazy>
			<Column field="date" header="Date"></Column>
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
						{{ slotProps.data.type === "Expenses" ? "-" : "+" }}₱{{ slotProps.data.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}
					</div>
				</template>
			</Column>
			<Column field="action" header="Actions">
				<template #body="slotProps">
					<ButtonGroup>
						<Button  @click="transaction.toggleVisibility(); id = slotProps.data.id;"  label="Edit" icon="pi pi-pencil" severity="success" />
						<Button @click="confirmDelete(slotProps.data.id)" label="Delete" icon="pi pi-trash"  severity="danger"/>
					</ButtonGroup>
				</template>
			</Column>
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
	background: red;
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
