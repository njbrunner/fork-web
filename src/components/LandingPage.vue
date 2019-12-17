<template>
<div class="container vertical-horizontal-center">
    <div class="application-name-container">
        <h1 class="application-name-text">Fork</h1>
    </div>
    <div class="form-container">
        <div class="form">
            <div v-if="isLogin">
                <h1 class="form-text">Login</h1>
                <user-form :actionButtonTitle="'Login'" @action-button-clicked="login"></user-form>
                <p class="spacing">Not a user? <a style="cursor:pointer" @click="flip">Signup.</a></p>
            </div>
            <div v-else>
                <h1 class="form-text">Signup</h1>
                <user-form :actionButtonTitle="'Signup'" @action-button-clicked="signup"></user-form>
                <p class="spacing">Already a user? <a style="cursor: pointer" @click="flip">Log in.</a></p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import UserForm from './UserForm';
export default {
    name: 'LandingPage',
    components: {
        UserForm,
    },
    data ()  {
        return {
            isLogin: true
        }
    },
    methods: {
        login(data) {
            this.$store.dispatch('login', data)
            .then(response => {
                console.log(response.data['Message']);
                this.$router.push({name: 'Home'});
            })
            .catch(error => {
                console.log(error);
            })
        },
        signup(data) {
            this.$store.dispatch('register', data)
            .then(response => {
                console.log(response.data['Message']);
                this.$router.push({name: 'Home'});
            })
            .catch(error => {
                console.log(error);
            })
        },
        flip() {
            this.isLogin = !this.isLogin;
        }
    }
}
</script>
<style>
@import '../assets/master.css';
.vertical-horizontal-center {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.container {
    width: 1500px;
    height: 500px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 20px;
    padding: 0 !important;
}
.application-name-container {
    background: var(--color-primary);
    width: 50%;
    height: 100%;
    padding: 0;
    border-radius: 20px;
    display: flex;
    box-shadow: 3px 0 0 rgba(0, 0, 0, 0.05), 6px 0 5px rgba(0, 0, 0, 0.1);
    float: left;
}
.application-name-text {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: auto;
    color: var(--color-background);
}
.form-container {
    width: 50%;
    height: 100%;
    padding: 0;
    float: right;
    display: flex;
}
.form-text {
    color: var(--color-secondary);
    margin: 30px;
}
.form {
    margin: auto;
}
.spacing {
    margin-top: 50px;
    color: var(--color-secondary);
}
</style>
