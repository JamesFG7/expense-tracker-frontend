<script lang="ts" setup>
import {onMounted, ref} from "vue";
import ThemeToggler  from "@/components/ThemeToggler.vue";
import {useThemeStore} from "@/stores/theme";

const theme = useThemeStore()
const op = ref();
const username = ref("James Doe");
const toggled = (event: Event) => {
  op.value.toggle(event);
}
onMounted(() => {
	theme.toggleTheme();
})
</script>
<template>
	<div class="card">
		<Menubar >
			<template #start>
				<svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-2rem">
					<path
						d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
						fill="var(--primary-color)"
					/>
					<path
						d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
						fill="var(--text-color)"
					/>
				</svg>
			</template>
			<template #end>
				<div class="flex align-items-center gap-2">
					<div class="card flex justify-content-center">
						<Button @click="toggled" outlined severity="contrast" class="account-button">
							<div class="account-image-container">
								<img class="account-image" src="https://this-person-does-not-exist.com/img/avatar-gen115dd0b681e323399203b0bc9ce5c4b1.jpg" />
							</div>
							<div class="account-username">
								{{ username }}
							</div>
							<i class="pi pi-angle-down account-icon"></i>
						</Button>
						<OverlayPanel ref="op">
							<ul>
								<li><ThemeToggler /></li>
								<router-link to="/account" class="link">
									<li>
										<i class="pi pi-cog"></i>Settings
									</li>
								</router-link>
								<router-link to="/account" class="link">
									<li>
										<i class="pi pi-sign-out"></i>Logout
									</li>
								</router-link>
							</ul>
						</OverlayPanel>
					</div>
				</div>
			</template>
		</Menubar>
	</div>

</template>

<style scoped lang="scss">
.account-button {
  .account-image-container{
    width: 30px;
    height: 30px;
    border-radius: 4000px;
    overflow:hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    .account-image {
      width:30px;
    }
  }
  .account-username {
    margin-left:10px;
    font-size: 15px;
    max-width:100px;
    min-width:60px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .account-icon {
    font-size: 15px;
    padding-top: 3px;
    margin-left: 8px;
    margin-right: -5px;
  }
}

ul {
	list-style-type: none;
	padding: 5px 10px;
	margin-top: 0;
	.link {
		text-decoration: none;
		color: var(--text-color);
	}
	li {
		padding: 7px 0px;
		display: flex;
		align-items: center;
		i {
			margin-right: 10px;
		}

  }
}
</style>