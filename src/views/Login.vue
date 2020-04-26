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

    <div
      v-if="error"
      class="alert alert--fail"
    >
      {{ error }}
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: mapGetters('auth', ['error']),
  methods: {
    ...mapActions('auth', [
      'login',
    ]),
    async submit() {
      await this.login(this.$data);

      this.$router.push({ name: 'Sepulkas' });
    },
  },
};
</script>

<style lang="sass">
.form
  background-color: #e5e5b4
  border-radius: .5rem
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  margin: 0 auto
  padding: 1rem
  width: 100%
  max-width: 320px

  & > *
    margin-bottom: 1rem

    &:last-child
      margin-bottom: 0


  &__field
    border: none
    border-radius: .25rem
    height: 2rem
    padding: 0 16px
    width: 100%

.btn
  background-color: #245483
  border: none
  border-radius: .25rem
  color: white
  cursor: pointer
  height: 2rem
  min-width: 120px
  width: 100%

.alert
  border-radius: .25rem
  font-size: .75rem
  padding: .5rem 1rem
  text-align: left
  width: 100%

  &--fail
    background-color: #ab6161
    color: white
</style>
