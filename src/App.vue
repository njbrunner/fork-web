<template>
  <div id="app" class="container-fluid">
    <nav class="navbar navbar-light navbar-expand">
      <router-link to="/" class="navbar-brand">
        <h3 class="title">Fork</h3>
      </router-link>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown" v-if="user">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
            <span><i class="far fa-user"></i> User</span>
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#" @click="showPanel">Settings</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" @click="logout">Logout</a>
          </div>
        </li>
      </ul>
    </nav>
    <div class="container-fluid background-color">
      <router-view></router-view>
    </div>
    <slideout-panel></slideout-panel>
  </div>
</template>

<script>
import './assets/master.js';
import SettingsPanel from './components/SettingsPanel.vue';

export default {
  name: 'app',
  components: {
    SettingsPanel,
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      .then(response => {
        this.$router.push('/login');
      })
      .catch(error => {
        console.log(error);
      });
    },
    showPanel() {
      const settingsPanel = this.$showPanel({
        component : SettingsPanel,
        openOn: 'right',
        width: 500,
        props: {user: this.user}
        // cssClass: 'settings-panel'
      });
    },
  },
  beforeUpdate() {
    this.$store.dispatch('fetchUser');
  }
}
</script>

<style>
@import './assets/master.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  background: var(--color-background);
  /* overflow: hidden; */
}
.title {
  color: var(--color-secondary);
}

.nav-link {
  color: var(--color-secondary) !important;
}

.settings-panel {
  background: var(--color-background);
}
</style>
