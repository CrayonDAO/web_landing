<template>
  <div id="app" ref="app">
    <router-view />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {
    window.alert = async (msg, obj) => {
      const opt = {
        titleClass: "text-left font-weight-normal text-14",
        dangerMsg: "",
        bodyClass: "px-5 pt-3 pb-2",
        contentClass: "confirm rounded-10 border-0 overflow-hidden",
        headerClass: "rounded-0 bg-primary bg-opacity-15 text-left ",
        footerClass: "border-0 d-flex justify-content-end ",
        okTitle: "예",
        okVariant: "primary text-13 py-1 px-3",
        centered: true,
        size: "sm",
        noCloseOnBackdrop: true,
        autoFocusButton: "ok",
        returnFocus: this.$refs.app,
        hideHeaderClose: false,
        headerCloseContent: `<i class="icon icon-times text-24"/>`,
        ...obj,
      };
      const msgVNode =
        typeof msg === "string"
          ? this.$createElement("div", {
              domProps: {
                innerHTML: `
        <span class="text-13 lh-200 opacity-8">${msg}</span>
      `,
              },
            })
          : msg;
      return await this.$bvModal.msgBoxOk([msgVNode], opt);
    };
    window.confirm = async (msg, obj) => {
      const options = {
        titleClass: "text-left font-weight-normal text-14",
        dangerMsg: "",
        bodyClass: "px-5 pt-3 pb-2",
        contentClass: "confirm rounded-10 border-0 overflow-hidden",
        headerClass: "rounded-0 bg-primary bg-opacity-15 text-left ",
        footerClass: "border-0 d-flex justify-content-end",
        okTitle: "예",
        cancelTitle: "아니오",
        okVariant: "primary text-13 py-1 px-3 text-white",
        cancelVariant: "secondary text-13 py-1 px-3",
        centered: true,
        size: "sm",
        noCloseOnBackdrop: true,
        autoFocusButton: "ok",
        hideHeaderClose: false,
        headerCloseContent: `<i class="icon icon-times text-24"/>`,
        ...obj,
      };
      const msgVNode =
        typeof msg === "string"
          ? this.$createElement("div", {
              domProps: {
                innerHTML: `
        <span class="mb-4 text-13 lh-200 opacity-8">${msg}</span>
        <span class="text-danger text-13 lh-200">${options.dangerMsg}</span>
      `,
              },
            })
          : msg;
      return await this.$bvModal.msgBoxConfirm([msgVNode], options);
    };
  },
  methods: {
    async toast(id, opt) {
      const h = this.$createElement;

      const headerNode = h("b-button", {
        on: { click: () => this.$bvToast.hide(id) },
        class: "bg-transparent ml-auto mr-1 mt-1 p-0 border-0",
        domProps: {
          innerHTML: `<i class="icon icon-times text-24"/>`,
        },
      });

      const bodyNode = h("div", {
        class: "px-2",
        domProps: {
          innerHTML: `
          <div class="d-flex align-items-center text-${opt.textVariant}">
            <i class="icon icon-24 icon-${opt.iconName} mr-2"/>
            <span class="text-13 fw-500 break-keep">${opt.msg}</span>
            
          </div>
          ${opt.files ? ` <div class="ml-2 pl-4 text-13 text-darkest text-truncate">${opt.files}</div>` : ""}
          `,
        },
      });

      this.$bvToast.toast(bodyNode, {
        id: id,
        solid: true,
        title: headerNode,
        noCloseButton: true,
        headerClass: `bg-${opt.variant} mb-n3 pb-0 pt-1 pr-1 border-0`,
        titleClass: "text-right",
        bodyClass: `bg-${opt.variant} pt-0 border-0 pr-4`,
        toastClass: "border-0 rounded-6 pt-0",
        toaster: "b-toaster-bottom-right",
      });
    },
  },
  async mounted() {
    window.wToast = this.toast;
  },
};
</script>

<style lang="scss"></style>
