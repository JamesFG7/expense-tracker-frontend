<script setup lang="ts">
import { ref } from 'vue';
import { useToast } from "primevue/usetoast";
import ThemeToggler from '@/components/ThemeToggler.vue';

const toast = useToast();
const user = ref({username: "", password: "", password_confirmation: ""}); 
const isUnameInvalid = ref(false);
const isPasswordInvalid = ref(false);
const isRepeatPasswordInvalid = ref(false);
const submitButtonDisabled = ref(true);

const usernameChange = () => {
    isUnameInvalid.value = !user.value.username;
    submitButtonDisabled.value = (user.value.username.length < 1 || user.value.password.length < 1 || (user.value.password !== user.value.password_confirmation));  
}

const passwordChange = () => {
    isPasswordInvalid.value = !user.value.password;
    submitButtonDisabled.value = (user.value.username.length < 1 || user.value.password.length < 1 || (user.value.password !== user.value.password_confirmation));
}

const repeatPasswordChange = () => {
    isRepeatPasswordInvalid.value = user.value.password !== user.value.password_confirmation;
    submitButtonDisabled.value = (user.value.username.length < 1 || user.value.password.length < 1 || (user.value.password !== user.value.password_confirmation));  
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
<ThemeToggler />
<Toast />
<div class="center">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div class="text-center mb-5">
            <img src="https://blocks.primevue.org/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3" />
            <div class="text-900 text-3xl font-medium mb-3">Register</div>
            <span class="text-600 font-medium line-height-3">Already have an account?</span>
            <router-link to="/" class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Login Here!</router-link>
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
            <FloatLabel>
                <InputText type="password" class="w-full" id="password" v-model="user.password_confirmation" :invalid="isRepeatPasswordInvalid" @input="repeatPasswordChange" toggleMask :feedback="false"/>
                <label for="password">Repeat Password</label>
            </FloatLabel>
            <div class="error-message" v-if="isRepeatPasswordInvalid">Password Does not match</div>
            <Button label="Register" icon="pi pi-user" class="w-full" @click="submitForm" :disabled="submitButtonDisabled"></Button>
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