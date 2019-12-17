<template>
    <div class="user-form">
        <form v-on:submit.prevent>
            <input class="form-control" type="email" placeholder="Email" v-model="email">
            <input class="form-control" type="password" placeholder="Password" v-model="password">
            <button type="submit" class="btn btn-outline-primary" @click="actionButtonClicked"> {{ actionButtonTitle }}</button>
        </form>
    </div>
</template>
<script>
export default {
    name: 'UserForm',
    props: {
        actionButtonTitle: String
    },
    data ()  {
        return {
            'email': null,
            'password': null
        }
    },
    methods: {
        actionButtonClicked() {
            this.$emit(
                'action-button-clicked',
                {
                    'email': this.email,
                    'password': this.password
                })
        }
    }
}
</script>
<style scoped>
@import '../assets/master.css';
.user-form {
    max-width: 400px;
}


</style>
