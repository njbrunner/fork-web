<template>
  <div id="app">
    <nav class="navbar navbar-light navbar-expand">
      <router-link to="/" class="navbar-brand">
        <h3 class="title">Fork</h3>
      </router-link>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-if="isLoggedIn">
          <a href="#" class="nav-link" @click="logout">Logout</a>
        </li>
      </ul>
    </nav>
    <div class="container-fluid background-color">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import './assets/master.js';
export default {
  name: 'app',
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      .then(response => {
        this.$router.push('/login')
      })
      .catch(error => {
        console.log(error)
      })
    }
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
}
.title {
  color: var(--color-secondary);
}
</style>
