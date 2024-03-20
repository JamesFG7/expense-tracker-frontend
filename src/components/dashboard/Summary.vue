<script setup lang="ts">
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import {ref} from "vue";

const confirm = useConfirm();
const toast = useToast();

const products = [{
		id: 1,
		date: "Tuesday, 28 Feb 2023",
		type: "Expenses",
		category: "Entertainment",
		amount: 50,
	}, {
		id: 2,
		date: "Tuesday, 28 Feb 2023",
		type: "Income",
		category: "Entertainment",
		amount: 50,
}];
const categories = ref([
	{ name: 'Entertainment'},
	{ name: 'Salary'},
	{ name: 'Food' },
	{ name: 'Rent' },
]);
const date = ref();
const amount = ref();
const type = ref();
const category = ref();
const updateDialogVisible = ref(false);
const addDialogVisible = ref(false);

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
	<Dialog v-model:visible="updateDialogVisible" modal header="Update Transaction" :style="{ width: '25rem' }">
		<template #header>
			<div class="dialog-header-title">
				<i class="pi pi-credit-card"></i>
				<div class="dialog-header-text">Update Transaction</div>
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
			<div class="flex align-items-center">
				<RadioButton v-model="type" inputId="type1" name="pizza" value="Income" />
				<label for="type1" class="ml-2">Income</label>
			</div>
			<div class="flex align-items-center">
				<RadioButton v-model="type" inputId="type1" name="pizza" value="Expenses" />
				<label for="type1" class="ml-2">Expenses</label>
			</div>
		</div>
		<div class="dialog-input-container">
			<label for="category" class="dialog-input-label">Category</label>
			<Dropdown v-model="category" :options="categories" optionLabel="name" placeholder="Select a Category"/>
		</div>
		<template #footer>
			<Button label="Cancel" outlined severity="primary" @click="updateDialogVisible = false" autofocus />
			<Button label="Save" severity="primary" @click="updateDialogVisible = false" autofocus />
		</template>
	</Dialog><Dialog v-model:visible="addDialogVisible" modal header="Add Transaction" :style="{ width: '25rem' }">
		<template #header>
			<div class="dialog-header-title">
				<i class="pi pi-credit-card"></i>
				<div class="dialog-header-text">Add Transaction</div>
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
			<div class="flex align-items-center">
				<RadioButton v-model="type" inputId="type1" name="pizza" value="Income" />
				<label for="type1" class="ml-2">Income</label>
			</div>
			<div class="flex align-items-center">
				<RadioButton v-model="type" inputId="type1" name="pizza" value="Expenses" />
				<label for="type1" class="ml-2">Expenses</label>
			</div>
		</div>
		<div class="dialog-input-container">
			<label for="category" class="dialog-input-label">Category</label>
			<Dropdown v-model="category" :options="categories" optionLabel="name" placeholder="Select a Category"/>
		</div>
		<template #footer>
			<Button label="Cancel" outlined severity="primary" @click="addDialogVisible = false" autofocus />
			<Button label="Save" severity="primary" @click="addDialogVisible = false" autofocus />
		</template>
	</Dialog>
	

	<div class="dashboard-header">
		<div class="title">
		Transaction Summary
		</div>
	</div>
	<div class=" px-4 pb-1 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Orders</span>
                        <div class="text-900 font-medium text-xl">152</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">24 new </span>
                <span class="text-500">since last visit</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Revenue</span>
                        <div class="text-900 font-medium text-xl">$2.100</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-map-marker text-orange-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">%52+ </span>
                <span class="text-500">since last week</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Customers</span>
                        <div class="text-900 font-medium text-xl">28441</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-inbox text-cyan-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">520  </span>
                <span class="text-500">newly registered</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Comments</span>
                        <div class="text-900 font-medium text-xl">152 Unread</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-comment text-purple-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">85 </span>
                <span class="text-500">responded</span>
            </div>
        </div>
    </div>
</div>

	<div class="dashboard-header">
		<div class="title">
		Transaction History
		</div>
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
						{{ slotProps.data.type === "Expenses" ? "-" : "+" }}₱{{ slotProps.data.amount}}.00
					</div>
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
	tbody.p-datatable-tbody {
		tr {
			td {

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