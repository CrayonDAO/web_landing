<template>
  <div id="logos">
    <h1 class="text-ny text-20 text-lg-30">
      <i>{{ title }}</i>
    </h1>
    <ul class="d-flex flex-column flex-lg-row align-items-center justify-content-around">
      <li class="mt-lg-0" :class="{ 'mt-5': i !== 0 }" v-for="(name, i) in items" :key="i">
        <img
          :class="{ kj: name === 'koreajoonangdaily' }"
          :src="require(`@/assets/logos/${name}.${name === 'koreajoonangdaily' ? 'png' : 'svg'}`)"
          :alt="`${name} 로고`"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    items: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
#logos {
  padding: 90px 8%;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  position: relative;
  h1 {
    position: absolute;
    top: 0;
    left: 50%;
    padding: 0 32px;
    transform: translate(-50%, -60%);
    background-color: #000;
    font-weight: 800;
  }
  img.kj {
    width: 109px;
  }
  @media all and (max-width: 992px) {
    padding: 48px 0;
    h1 {
      padding: 0 18px;
      transform: translate(-50%, -50%);
    }
    img {
      max-width: 126px;
    }
    img.kj {
      width: 77px;
    }
  }
}
</style>
