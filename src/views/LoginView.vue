<script setup lang="ts">
import { ref } from 'vue';

import { useToast } from "primevue/usetoast";
const toast = useToast();


const user = ref({username: "", password: ""}); 
const isUnameInvalid = ref(false);
const isPasswordInvalid = ref(false);
const submitButtonDisabled = ref(true);


const usernameChange = () => {
    isUnameInvalid.value = !user.value.username;
    submitButtonDisabled.value = (user.value.username.length < 1 || user.value.password.length < 1);
}

const passwordChange = () => {
    isPasswordInvalid.value = !user.value.password;
    submitButtonDisabled.value = (user.value.username.length < 1 || user.value.password.length < 1);
    
}

const submitForm = () => {
    console.log(user.value);
    
    if(user.value.username !== "admin" && user.value.password !== "admin"){
        toast.add({ severity: 'error', summary: 'Invalid Input', detail: 'Invalid Username and Password', life: 30000 });
    }
    else {
        
        toast.add({ severity: 'success', summary: 'Success', detail: 'Redirecting you to homepage', life: 30000 });
    }
}

</script>


<template>
<h1 class="title">Login</h1>
<FloatLabel>
    <InputText id="username" v-model="user.username" :invalid="isUnameInvalid" @input="usernameChange"/>
    <label for="username">Username</label>
</FloatLabel>
<div class="error-message" v-if="isUnameInvalid">Username can't be empty</div>
<FloatLabel>
    <Password id="password" v-model="user.password" :invalid="isPasswordInvalid" @input="passwordChange" toggleMask :feedback="false"/>
    <label for="password">Password</label>
</FloatLabel>

<div class="error-message" v-if="isPasswordInvalid">Password can't be empty</div>

<Toast />
<Button label="Login" icon="pi pi-angle-double-right" @click="submitForm" :disabled="submitButtonDisabled"/>
</template>

<style lang="scss">
.error-message {
    color: #fca5a5;
}
.title {
    margin-bottom: 1.3em;
}

.p-float-label, button {
    margin-top: 2em;
}

</style>