<template>
  <div id="layout-default">
    <!-- gnb -->
    <global-nav />
    <!-- !gnb -->
    <section class="min-vh-100">
      <router-view />
    </section>
    <!-- gnf -->
    <global-footer />
    <!-- !gnf -->
  </div>
</template>

<script>
import Nav from "@/components/Nav/index.js";
export default {
  components: {
    globalNav: Nav.globalNav,
    globalFooter: Nav.globalFooter,
  },
};
</script>

<style lang="scss" scoped>
#layout-default {
  background-color: #000;
  color: #fff;
}
</style>
