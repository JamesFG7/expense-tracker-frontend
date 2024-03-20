import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useTransactionStore = defineStore('transaction', () => {
    const dialogVisibility = ref(false);
    const transactions = ref();
    const categories = ref([
        { name: 'Entertainment'},
        { name: 'Salary'},
        { name: 'Food' },
        { name: 'Rent' },
    ]);
    function setTransactions() {
        transactions.value =  [{
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
    }

    function toggleVisibility(): void {
        dialogVisibility.value = !dialogVisibility.value;
    }

    function addTransaction(newTransaction: any): void {
        transactions.value.push(newTransaction);
        toggleVisibility();
    }
    function updateTransaction(updatedTransaction: any): void {
        const index = transactions.value.findIndex((transaction: { id: number }) => transaction.id === updatedTransaction.id);
        if (index !== -1) {
            transactions.value.splice(index, 1, updatedTransaction);
        }
        toggleVisibility();
    }
    function deleteTransaction(id:number): void{
        transactions.value = transactions.value.filter((transaction: { id: number }) => transaction.id !== id);
        //do delete request
    }
    return {dialogVisibility, transactions, categories, toggleVisibility, setTransactions, addTransaction, deleteTransaction, updateTransaction };
})
