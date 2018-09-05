<template>
  <div id="app">
    <app-header></app-header>
    <app-posts></app-posts>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppPosts from './pages/AppPosts';

export default {
  name: 'App',
  components: { AppHeader, AppPosts },
  created() {
    const userId = Math.floor(Math.random() * 10) + 1; // random between 1 - 10
    this.$store.dispatch('user/fetchUserProfile', userId);
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
