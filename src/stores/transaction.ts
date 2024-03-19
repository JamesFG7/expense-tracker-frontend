import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTransactionStore = defineStore('transaction', () => {
    const dialogVisibility = ref(false);
    const transactions = reactive({id: Number, type: String, category: String, amount: Number});
    
    const toggleVisibility = computed(() => !dialogVisibility.value)

    return {dialogVisibility, transactions, toggleVisibility};
})
