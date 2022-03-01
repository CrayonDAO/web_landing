<template>
  <header id="gnb" class="container">
    <!-- gnb -->
    <nav class="d-flex align-items-center justify-content-between">
      <ul class="sns d-none d-lg-flex">
        <li v-for="item in sns" :key="item">
          <b-btn variant="text p-0" :href="$urls[item]" target="_blank">
            <i :class="`icon icon-${item} icon-40`" />
          </b-btn>
        </li>
      </ul>
      <h1 class="logo">
        <router-link to="/">
          <img :src="require('@/assets/logo.svg')" alt="Crayon 로고" />
        </router-link>
      </h1>
      <div class="ml-auto mr-0 d-none d-lg-flex">
        <b-btn variant="white text-18" pill size="sm" :href="$urls['getStarted']" target="_blank"> Get Started </b-btn>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      sns: ["discord", "twitter", "github"],
    };
  },
};
</script>

<style lang="scss" scoped>
#gnb {
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    ul.sns {
      padding: 42px 0;
      display: flex;
      align-items: center;
      li {
        margin-right: 20px;
      }
    }

    h1.logo {
      position: absolute;
      margin-bottom: 0;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 160px;
      @media all and (max-width: 992px) {
        width: 75px;
      }
      img {
        width: 100%;
        height: auto;
        vertical-align: top;
      }
    }
  }
}
</style>
