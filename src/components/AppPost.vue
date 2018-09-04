<template>
  <div class="post" :key="post.id">
    <div class="post-title">{{ post.title }}</div>
    <div class="post-body">{{post.userId}} {{ post.body }}</div>
    <div class="horizontal-divider"></div>
  </div>
</template>

<script>
export default {
  name: 'AppPost',
  props: ['post'],
};
</script>


<style scoped>
.post {
  display: flex;
  flex-direction: column;
}

.post .horizontal-divider {
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 25px 0px;
}

.post .post-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.post .post-body {
  font-size: 16px;
}
</style>
