<template>
  <div id="app">
    <Header />
    <main class="container my-5 p-3">
      <router-view />
    </main>
    <company-news></company-news>
  </div>
</template>

<script>
import CompanyNews from './components/CompanyNews.vue';
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    Header,
    CompanyNews,
  },
  created() {
    this.$store.dispatch('fetchTodos');
  },

};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
}
</style>
