<template>
  <div class="main">
    <div class="main__header">
      <header-component></header-component>
    </div>
    <div class="main__body">
      <div class="main__body__content">
        <router-view></router-view>
      </div>
      <div class="main__body__footer">
        <footer-component></footer-component>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/pages/layouts/Header";
import FooterComponent from "@/pages/layouts/Footer";

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>
