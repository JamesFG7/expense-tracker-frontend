<template>
    <div class="card">
        <Menubar :model="items"/>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Menubar from 'primevue/menubar';

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
]);
</script>

<style lang="scss">
    .p-menubar {
        background: #0d0d0d;
        border: none;
        font-weight: 300;
        ul.p-menubar-root-list {
            li {
                div.p-menuitem-content {
                    transition: 0.3s;
                    &:hover {
                        background: #f2f2f2;
                        a {
                            span {
                                color: #0d0d0d;
                            }
                        }
                    }
                }
            }
        }
    }
    
</style>
