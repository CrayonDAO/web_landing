import Vue from "vue";

// import regex from "../lib/regex";
const common = {
  install(Vue) {
    Vue.mixin({
      computed: {},
      data() {
        return {
          submitServerError: null,
          // s3: "https://dihisoft.site/",
          s3: "",
          db: process.env.VUE_APP_S3,
          progress: {
            status: false,
            per: 0,
          },
        };
      },
      methods: {
        copyText(text, obj) {
          const board = navigator.clipboard;
          board
            .writeText(text)
            .then(() => {
              this.wToast("toast-clipboard-copied", {
                variant: "success",
                textVariant: "white",
                iconName: "check-white",
                msg: this.$t("message.clipboard.copied", {
                  object: this.$t(obj),
                }),
              });
            })
            .catch((error) => {
              this.wToast("toast-clipboard-copied", {
                variant: "success",
                textVariant: "white",
                iconName: "check-white",
                msg: error,
              });
            });
        },

        toLocaleDate(value) {
          const date = new Date(value);
          date.setHours(date.getHours() + 9);
          return date.toLocaleDateString("ko-KR");
        },

        $numberOnly(e, key, maxLength, comma) {
          if (e && e.target) {
            let val = e.target.value.replace(/\D/g, ""); //숫자가 아닌것을 제거, 즉 [0-9]를 제외한 문자 제거; /[^0-9]/g 와 같은 표현v
            val = val.substr(0, maxLength);
            if (comma) {
              val = (+val).toLocaleString();
            }
            this.input[key] = val;
            this.$emit("input", val);
          }
        },
      },
    });
  },
};

Vue.use(common);
