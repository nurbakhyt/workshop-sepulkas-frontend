<template>
  <div id="app">
    <div id="nav">
      <template v-if="token">
        <router-link :to="{ name: 'Home' }">Home</router-link> |
        <router-link :to="{ name: 'Sepulkas' }">Sepulkas</router-link> |
        <a
          class="router-link-exact-active router-link-active"
          href=""
          @click.prevent="logOut"
        >
          Logout
        </a>
      </template>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: mapGetters('auth', ['token']),
  methods: {
    ...mapActions('auth', ['logout']),
    async logOut() {
      this.logout();

      this.$router.push({ name: 'Login' });
    },
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-right: auto;
  margin-left: auto;
  max-width: 360px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
