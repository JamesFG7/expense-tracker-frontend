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
	<TransactionTable page="summary"/>
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