<template>
  <div
    class="loading"
    :class="{ sm: size === 'sm', md: size === 'md', lg: size === 'lg' }"
  ></div>
</template>

<script>
export default {
  name: 'app-spinner',
  props: {
    size: {
      type: String,
      default: 'sm',
      validator(value) {
        // The value must match one of these strings
        return ['sm', 'md', 'lg'].indexOf(value) !== -1;
      },
    },
  },
};
</script>


<style scoped>
/**
  credit: https://codepen.io/mandelid/pen/vwKoe
*/

.loading {
  display: inline-block;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: blueviolet;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

.loading.sm {
  width: 25px;
  height: 25px;
}

.loading.md {
  width: 35px;
  height: 35px;
}

.loading.lg {
  width: 45px;
  height: 45px;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
