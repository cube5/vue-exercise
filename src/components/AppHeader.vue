<template>
  <header class="header">
    <div class="title">Blog App <span class="version">v{{ version }}</span></div>
    <div class="right">
      <app-user-avatar></app-user-avatar>
      <div class="github">
        <a href="https://github.com/cube5/vue-exercise">Github</a>
      </div>
    </div>
  </header>
</template>

<script>
import AppUserAvatar from './AppUserAvatar';
import { version } from '../../package.json';

export default {
  name: 'app-header',
  components: { AppUserAvatar },
  data() {
    return {
      version,
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: hotpink;
  padding: 15px 20px;
}

.header .title {
  font-size: 24px;
}

.header .version {
  font-size: 14px;
}

.header .right {
  display: flex;
}

.header .github {
  display: flex;
  align-items: center;
  margin-left: 10px;
}
</style>
