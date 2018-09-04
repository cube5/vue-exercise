<template>
  <div v-if="user.id" class="avatar">{{ user.name | initialsOnly | upperCase }}</div>
  <div v-else-if="loading">
    <app-spinner size="sm"></app-spinner>
  </div>
  <div v-else-if="error"></div>
</template>

<script>
import { mapState } from 'vuex';
import AppSpinner from './AppSpinner';

export default {
  name: 'app-user-avatar',
  components: { AppSpinner },
  computed: mapState({
    user: state => state.user.profile,
    loading: state => state.user.loading,
    error: state => state.user.error,
  }),
  filters: {
    upperCase: function upperCase(value) {
      if (!value) return '';
      return value.toUpperCase();
    },
    initialsOnly: function initialsOnly(value) {
      if (!value) return '';
      const [name, lastName] = value.split(' ');
      return lastName ? name[0] + lastName[0] : name[0];
    },
  },
};
</script>

<style scoped>
.avatar {
  border: 1px blueviolet;
  border-radius: 50%;
  background-color: blueviolet;
  color: white;
  padding: 8px;
}
</style>
