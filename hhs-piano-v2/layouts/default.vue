<template>
  <div id="app">
    <div id="content-wrapper" class="bg-primary container">
      <Header />
      <Nav :currentPage="this.$route.path" />
      <router-view />
      <Footer />
    </div>
  </div>
</template>


<script>
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      currentPage: ''
    }
  },
    components: {
    Header,
    Nav,
    Footer
  }
}

</script>

<style lang="scss">
@import './assets/css/base.normalize';
@import './assets/css/settings.variables';
@import './assets/css/settings.responsive';
@import './assets/css/components.content';
@import './assets/css/style.scss'


</style>
