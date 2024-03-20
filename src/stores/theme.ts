import { ref } from 'vue'
import { defineStore } from 'pinia'
import {usePrimeVue} from "primevue/config";
export const useThemeStore = defineStore('theme', () => {

	const PrimeVue = usePrimeVue();
	const darkTheme = "aura-dark-purple";
	const lightTheme = "aura-light-purple";
	const currentTheme = ref(localStorage.getItem('theme') || darkTheme);
	const icon = ref((currentTheme.value === darkTheme) ? "pi pi-moon" : "pi pi-sun");
	const isDarkTheme = ref(localStorage.getItem("theme") === darkTheme);
	const label = ref(isDarkTheme.value ? lightTheme : darkTheme);

	function toggleTheme() : void {
		let nextTheme: string;
		if (currentTheme.value === darkTheme) {
			nextTheme = lightTheme;
		} else {
			nextTheme = darkTheme;
		}
		PrimeVue.changeTheme(currentTheme.value, nextTheme, "dark-theme-link");
		localStorage.setItem("theme", currentTheme.value);
		label.value = isDarkTheme.value ? lightTheme : darkTheme;
		icon.value = currentTheme.value === darkTheme ? "pi pi-moon" : "pi pi-sun";
		currentTheme.value = nextTheme;
	}

	return {icon, toggleTheme}
})
