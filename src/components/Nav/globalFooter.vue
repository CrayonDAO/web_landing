<template>
  <footer id="gnf" class="container">
    <small class="notice">
      Crayon is currently in beta. Materials on the Crayon site are for information purpose only, and are not a solicitation or advice to buy or sell
      any securities.
    </small>
    <nav class="d-flex flex-column flex-lg-row align-items-start align-items-lg-end justify-content-lg-between">
      <ul class="sns d-flex justify-content-around w-sm-100 order-2 order-lg-1">
        <li v-for="item in sns" :key="item">
          <b-btn variant="text p-0" :href="$urls[item]" target="_blank">
            <i :class="`icon icon-${item} icon-40 icon-sm-50`" />
          </b-btn>
        </li>
      </ul>
      <h1 class="logo order-3 order-lg-2">
        <router-link to="/">
          <img :src="require('@/assets/logo-reverse.svg')" alt="Crayon 로고" />
        </router-link>
      </h1>
      <div class="ml-lg-auto mr-lg-0 d-flex order-1 order-lg-3">
        <ul class="links">
          <li v-for="item in links" :key="item" class="link-item">
            <a :href="$urls[item]" target="_blank" class="btn btn-link text-white p-0">
              {{ item }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      sns: ["discord", "twitter", "github"],
      links: ["documentation", "medium", "notion", "discord", "twitter", "telegram"],
    };
  },
};
</script>

<style lang="scss" scoped>
#gnf {
  display: flex;
  flex-direction: column;
  small.notice {
    font-size: 14px;
    color: #a7a7a7;
    line-height: 32px;
    display: block;
    margin-bottom: 37px;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    ul.sns {
      padding: 0 0 40px;
      display: flex;
      align-items: center;
      li {
        margin-right: 20px;
      }
    }

    h1.logo {
      position: absolute;
      bottom: 0;
      margin-bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 160px;

      img {
        width: 100%;
        height: auto;
        vertical-align: bottom;
      }
    }

    .links {
      padding-bottom: 44px;
      .link-item {
        margin-bottom: 12px;
        a:link {
          text-transform: capitalize;
          font-size: 18px;
          line-height: 32px;
          font-weight: 500;
          height: inherit !important;
        }
      }
    }
    @media all and (max-width: 992px) {
      ul.sns {
        margin-bottom: 104px;
        padding: 0;
        li {
          margin-right: 0;
        }
      }

      h1.logo {
        width: 75px;
      }
      small.notice {
        color: #666;
        line-height: 20px;
        margin-bottom: 40px;
      }

      .links {
        padding-bottom: 20px;
        .link-item {
          margin-bottom: 18px;
          a:link {
            font-size: 16px;
            line-height: 16px;
          }
        }
      }
    }
  }
}
</style>
