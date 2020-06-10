<template>
  <div class="preloader" v-show="preloader">
    <img src="@/assets/images/preloader.gif" alt="Preloader..." />
  </div>
</template>

<script>
export default {
  computed: {
    preloader() {
      return this.$store.state.preloader.isLoading;
    }
  }
};
</script>

<style scoped>
/*Overlay */

.preloader {
  background-color: hsla(0, 0%, 100%, 0.75);
  z-index: 9999;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  position: fixed;
  margin: 0;
}

.preloader {
  display: flex;
  justify-content: center;
  align-items: center;
}
.preloader img {
  max-width: 10%;
}
</style>
