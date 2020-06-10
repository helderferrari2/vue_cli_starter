<template>
  <div id="app">
    <vue-snotify></vue-snotify>
    <preloader></preloader>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
