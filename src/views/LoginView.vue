<script setup lang="ts">
import { ref } from 'vue';

import { useToast } from "primevue/usetoast";
import NavBar from '@/components/NavBar.vue';
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
    <NavBar />
<!-- <h1 class="title">Login</h1>
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

 -->


<Toast />
<div class="center">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div class="text-center mb-5">
            <img src="https://blocks.primevue.org/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3" />
            <div class="text-900 text-3xl font-medium mb-3">Login</div>
            <span class="text-600 font-medium line-height-3">Don't have an account?</span>
            <router-link to="/register" class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Sign Up Here!</router-link>
        </div>

        <div>
            <FloatLabel>
                <InputText class="w-full" id="username" v-model="user.username" :invalid="isUnameInvalid" @input="usernameChange"/>
                <label for="username">Username</label>
            </FloatLabel>
            <div class="error-message" v-if="isUnameInvalid">Username can't be empty</div>
            <FloatLabel>
                <InputText type="password" class="w-full" id="password" v-model="user.password" :invalid="isPasswordInvalid" @input="passwordChange" toggleMask :feedback="false"/>
                <label for="password">Password</label>
            </FloatLabel>
            <div class="error-message" v-if="isPasswordInvalid">Password can't be empty</div>
            <div class="flex align-items-center justify-content-between mb-6 mt-3">
                <div class="flex align-items-center">
                    <Checkbox id="rememberme1" :binary="true" v-model="checked1" class="mr-2"></Checkbox>
                    <label for="rememberme1">Remember me</label>
                </div>
                <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
            </div>
            <Button label="Sign In" icon="pi pi-user" class="w-full" @click="submitForm" :disabled="submitButtonDisabled"></Button>
        </div>
    </div>
</div>

</template>

<style lang="scss">

.error-message {
    color: #fca5a5;
    margin-top: 0.5em;
}
.title {
    margin-bottom: 1.3em;
}

.p-float-label, button {
    margin-top: 2em;
}
.center {
    display: flex;
    justify-content: center;
}
</style>