<template>
  <footer class="main-footer bg-dark">
    <div class="row">
      <span class="copyright mx-auto"
        >SPA-VUE-STARTER COPYRIGHT © {{ year }}</span
      >
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
.main-footer {
  padding: 20px;
  color: white;
}
</style>
