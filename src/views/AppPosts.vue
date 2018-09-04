<template>
  <div class="container">
    <div class="column-left">
      <div class="column-title">Your posts</div>

      <div v-if="loading">
        <app-spinner size="lg"></app-spinner>
      </div>

      <div v-if="error">
        <pre>Error occured. Please try again.</pre>
      </div>

      <template v-for="post in userPosts">
        <app-post :key="post.id" v-bind:post="post"></app-post>
      </template>
      <div v-if="userPosts.length === 0">No posts to show...</div>
    </div>

    <div class="vertical-divider"></div>

    <div class="column-right">
      <div class="column-title">Other people's posts</div>

      <div v-if="loading">
        <app-spinner size="lg"></app-spinner>
      </div>

      <div v-if="error">
        <pre>Error occured. Please try again.</pre>
      </div>

      <template v-for="post in posts">
        <app-post :key="post.id" v-bind:post="post"></app-post>
      </template>
      <div v-if="posts.length === 0">No posts to show...</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import AppPost from '../components/AppPost';
import AppSpinner from '../components/AppSpinner';

export default {
  name: 'app-posts',
  components: { AppPost, AppSpinner },
  computed: {
    ...mapState({
      loading: state => state.blog.loading,
      error: state => state.blog.error,
    }),
    ...mapGetters('blog', {
      posts: 'posts',
      userPosts: 'userPosts',
    }),
  },
  created() {
    this.$store.dispatch('blog/fetchPosts');
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex: 1;
  justify-content: space-around;
  margin: 40px;
}

.container .vertical-divider {
  width: 1px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0px 25px;
}

.column-left {
  flex: 2;
}

.column-right {
  flex: 3;
}

.column-title {
  font-size: 28px;
  margin-bottom: 25px;
}
</style>
