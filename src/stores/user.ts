import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useUserStore = defineStore('user', () => {
    const user = ref({id: 1, username: 'JamesDoe', first_name: "James", last_name: "Ga"})

    return {user};
})
