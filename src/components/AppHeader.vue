<template>
  <header class="header">
    <div class="title">Blog App <span class="version">v{{ version }}</span></div>
    <app-user-avatar></app-user-avatar>
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
</style>
