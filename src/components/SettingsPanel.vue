<template>
    <div class="settings-panel">
        <div class="container">
            <h1>Settings</h1>
            <hr>
            <h3>{{ user.email }}</h3>
            <md-switch class="color-primary" v-model="darkMode" @change="updateSetting">Dark Mode</md-switch>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "SettingsPanel",
    props: {
        user: Object
    },
    data() {
        return {
            darkMode: this.user.enable_dark_mode
        }
    },
    methods: {
        updateSetting() {
            this.$store.dispatch('updateUser', {
                'user_id': this.user.id,
                'enable_dark_mode': this.darkMode
            })
            // .then(() => {
            //     console.log('fetching theme');
            //     this.$store.dispatch('fetchTheme');
            // });
        }
    }
}
</script>

<style>
.settings-panel {
    color: var(--color-primary);
    background: var(--color-background);
    height: 100vh;
}
.color-primary {
    color: var(--color-primary) !important;
}
.md-switch.md-theme-default.md-checked .md-switch-thumb {
    /* color: var(--color-primary) !important; */
    background-color: var(--color-primary) !important;
}
.md-switch.md-theme-default .md-switch-thumb {
    background-color: var(--color-primary) !important;
}
.md-switch.md-theme-default.md-checked .md-switch-container {
    /* color: var(--color-primary) !important; */
    background-color: var(--color-secondary) !important;
}
.md-switch.md-theme-default.md-checked .md-ripple {
    color: var(--color-secondary) !important;
}
</style>