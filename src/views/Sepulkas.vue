<template>
  <div class="about">
    <h1>This is sepulkas page</h1>

    <table>
      <thead>
        <tr>
          <td>Коффициент</td>
          <td>Название</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="sepulka in sepulkas" :key="sepulka.id">
          <td>{{ sepulka.coefficient }}</td>
          <td>{{ sepulka.slug }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: mapGetters('sepulkas', ['sepulkas']),
  methods: mapActions('sepulkas', [
    'GET_SEPULKAS',
  ]),
  mounted() {
    this.GET_SEPULKAS();
  },
};
</script>
