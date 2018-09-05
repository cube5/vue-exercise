<template>
  <div class="container">
    <div class="column-left">
      <div class="column-title">Your posts</div>

      <app-post-list
        v-bind:posts="userPosts"
        v-bind:loading="loading"
        v-bind:error="error"
      ></app-post-list>
    </div>

    <div class="vertical-divider"></div>

    <div class="column-right">
      <div class="column-title">Other people's posts</div>

      <app-post-list
        v-bind:posts="posts"
        v-bind:loading="loading"
        v-bind:error="error"
      ></app-post-list>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import AppPostList from '../../components/AppPostList';

export default {
  name: 'app-posts',
  components: { AppPostList },
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
