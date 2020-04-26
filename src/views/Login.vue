<template>
  <form
    class="form"
    @submit.prevent="submit"
  >
    <h3>Логин</h3>
    <input
      v-model="username"
      class="form__field"
      type="text"
      name="username"
      placeholder="username"
      required
    >
    <input
      v-model="password"
      class="form__field"
      type="password"
      placeholder="password"
      required
    >
    <button
      type="submit"
      class="btn"
    >
      Login
    </button>
  </form>
</template>

<script>
// import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    ...mapActions('auth', [
      'login',
    ]),
    async submit() {
      // const response = await axios.post('/api/v1/token', this.$data);
      // const { access } = response.data;
      //
      // debugger;
      // console.log(access);
      await this.login(this.$data);

      this.$router.push({ name: 'Sepulkas' });
    },
  },
};
</script>

<style lang="sass">
*
  box-sizing: border-box

.form
  background-color: #e5e5b4
  border-radius: .5rem
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  margin: 0 auto
  padding: 0 1rem
  width: 100%
  max-width: 320px

  &__field
    border: none
    border-radius: .25rem
    height: 2rem
    margin-bottom: 1rem
    padding: 0 16px
    width: 100%

.btn
  background-color: #245483
  border: none
  border-radius: .25rem
  color: white
  cursor: pointer
  height: 2rem
  margin-bottom: 1rem
  min-width: 120px
  width: 100%
</style>
