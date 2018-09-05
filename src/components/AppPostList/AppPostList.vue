<template>
  <div>
    <div v-if="loading">
      <app-spinner size="lg"></app-spinner>
    </div>

    <div v-else-if="error">
      <pre class='error-message'>{{ error.message }}</pre>
    </div>

    <div v-else-if="posts.length === 0">No posts to show...</div>

    <app-post v-for="post in posts" :key="post.id" v-bind:post="post"></app-post>
  </div>
</template>

<script>
import AppPost from '../AppPost';
import AppSpinner from '../AppSpinner';

export default {
  name: 'app-post-list',
  components: { AppPost, AppSpinner },
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Error,
      default: () => null,
    },
  },
};
</script>

<style scoped>
.error-message {
  padding: 10px;
  background-color: lightpink;
}
</style>
