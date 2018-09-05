<template>
  <div v-if="user.id" class="avatar-circle">
    <span class="initials">{{ user.name | initialsOnly | upperCase }}</span>
  </div>
  <div v-else-if="loading">
    <app-spinner size="sm"></app-spinner>
  </div>
  <div v-else-if="error"></div>
</template>

<script>
import { mapState } from 'vuex';
import AppSpinner from '../AppSpinner';

export const filters = {
  upperCase: function upperCase(value) {
    if (!value) return '';
    return value.toUpperCase();
  },
  initialsOnly: function initialsOnly(value) {
    if (!value) return '';
    const [name, lastName] = value.split(' ');
    return lastName ? name[0] + lastName[0] : name[0];
  },
};

export default {
  name: 'app-user-avatar',
  components: { AppSpinner },
  computed: mapState({
    user: state => state.user.profile,
    loading: state => state.user.loading,
    error: state => state.user.error,
  }),
  filters,
};
</script>

<style scoped>
.avatar-circle {
  width: 40px;
  height: 40px;
  background-color: blueviolet;
  text-align: center;
  border-radius: 50%;
}

.initials {
  position: relative;
  top: 10px; /* 25% of parent */
  font-size: 20px; /* 50% of parent */
  line-height: 20px; /* 50% of parent */
  color: #fff;
}
</style>
