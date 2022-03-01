<template>
  <div>
    <b-container>
      <!-- intro -->
      <section id="intro" class="intro d-flex flex-column justify-content-center">
        <article class="title">
          <h1 class="title text-lg-97 text-40 fw-700">Basecamp for <strong class="text-primary fw-700"> NFT DAOs</strong></h1>
          <p class="desc">Web 3.0 infrastructure for decentralized, democratized, and community-governed investment clubs.</p>
        </article>
        <article class="guide d-flex align-items-start align-items-lg-center flex-column flex-lg-row">
          <ul class="text-18 text-lg-24">
            <li class="mb-1 mb-lg-2" v-for="(item, i) in guides" :key="i">
              <strong :class="`text-${item.variant}`">{{ item.name }}</strong>
              <span> {{ item.text }}</span>
            </li>
          </ul>
          <div class="util ml-lg-auto mt-5 mt-lg-0 w-sm-100">
            <b-btn variant="white d-block d-lg-none mb-3 w-sm-100" pill size="md" :href="$urls['getStarted']" target="_blank"> Get started </b-btn>
            <b-btn variant="outline-white btn-flex-center w-sm-100" pill size="md" :href="$urls['discord']" target="_blank">
              <i class="icon icon-discord-symbol icon-sm-24 icon-40" />Join Discord
            </b-btn>
          </div>
        </article>
      </section>
      <!-- ! intro -->
      <!-- as seen on -->
      <logos title="As Seen on" :items="partners" />
      <!-- ! as seen on -->
      <!-- club -->
      <section id="club">
        <h1 class="text-left text-lg-center text-30 text-lg-55 fw-700">
          Start your <strong class="text-secondary">Investment Club</strong>
          <br class="d-none d-lg-block" />
          in minutes.
        </h1>
        <b-row class="util" align-h="center">
          <b-col cols="12" lg="5" class="px-lg-1">
            <b-btn variant="white w-100" size="lg" pill :href="$urls['getStarted']" target="_blank"> Get Started </b-btn>
          </b-col>
        </b-row>
        <!-- 카드 슬라이드 -->
        <article class="card-group">
          <section class="group-wrap w-100 d-flex align-items-stretch justify-content-lg-center overflow-auto">
            <div class="card-wrap" v-for="(item, i) in cards" :key="i">
              <b-card class="w-100">
                <b-card-header>
                  <i :class="`icon icon-${item.name} icon-43`" />
                </b-card-header>
                <b-card-text>
                  <h1 :class="`text-${item.variant} text-18 text-lg-26`">
                    {{ item.name }}
                  </h1>
                  <p>
                    {{ item.desc }}
                  </p>
                </b-card-text>
              </b-card>
            </div>
          </section>
        </article>
        <!-- ! 카드 슬라이드 -->
      </section>
      <!-- ! club -->
      <!-- 커뮤니티 폼 -->
      <section id="community">
        <h1 class="text-30 text-lg-55 fw-700 mb-4 pb-lg-2">Need help <span class="text-secondary"> building your community?</span></h1>
        <!-- 노션, 디스코드 링크 -->
        <ul class="text-18 text-lg-24 d-block d-lg-none">
          <li class="mb-3">
            <h6 class="mb-0">Crayon’s Notion is a great place to start</h6>
            <a class="d-flex align-items-center text-18 fw-400 text-primary" :href="$urls['notion']" target="_blank">
              GO TO NOTION <i class="icon icon-next-primary icon-12 ml-2" />
            </a>
          </li>
          <li class="mb-3">
            <h6 class="mb-0">Crayon’s Discord is a great place to discuss</h6>
            <a class="d-flex align-items-center text-18 fw-400 text-third" :href="$urls['discord']" target="_blank">
              GO TO DISCORD <i class="icon icon-next-third icon-12 ml-2" />
            </a>
          </li>
        </ul>
        <ul class="d-none d-lg-block">
          <li class="mb-2">
            <b-btn variant="text text-white p-0 text-24" class="d-flex align-items-center" :href="$urls['notion']" target="_blank">
              <span> Crayon’s <strong class="text-primary">Notion</strong> is a great place to start</span>
              <i class="icon icon-next icon-18 ml-2 mb-n1" />
            </b-btn>
          </li>
          <li class="mb-2">
            <b-btn variant="text text-white p-0 text-24" class="d-flex align-items-center" :href="$urls['discord']" target="_blank">
              <span> Crayon’s <strong class="text-third">Discord</strong> is a great place to discuss</span>
              <i class="icon icon-next icon-18 ml-2 mb-n1" />
            </b-btn>
          </li>
        </ul>
        <!-- ! 노션, 디스코드 링크 -->
        <div id="form-community">
          <b-row class="input-subscribe">
            <b-col cols="12" lg="5">
              <b-btn type="submit" variant="white w-100" size="lg" :href="$urls.newletter" target="_blank">Newsletter Signup</b-btn>
            </b-col>
          </b-row>
        </div>
        <!-- <form @submit.prevent="subscribe" id="form-community">
          <div class="input-subscribe">
           
            <b-row align-v="stretch" class="mx-0">
              <b-col cols="12" lg="5" class="px-0">
                <b-form-input placeholder="Email address" v-model="email" />
              </b-col>
              <b-col cols="12" lg="2" class="px-0">
                <b-btn type="submit" variant="white w-100" :disabled="validate('email', email)">Subscribe</b-btn>
              </b-col>
            </b-row>
            <small class="feedback text-14 text-lg-24">Be the first to hear about the latest news and updates. You can unsubscribe anytime.</small>
          </div>
        </form> -->
        <!-- ! 커뮤니티 폼 -->
      </section>
      <!-- Join -->
      <section id="join">
        <h1 class="d-block d-lg-none">Join <strong class="text-third">CrayonDAO</strong></h1>
        <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <div class="symbol d-flex flex-column align-items-center justify-cotent-center">
            <img class="m-auto w-sm-100" :src="require('@/assets/symbol.svg')" alt="로고 심볼" />
          </div>
          <div class="text-left text-lg-right">
            <h1 class="d-none d-lg-block">Join <strong class="text-third">CrayonDAO</strong></h1>
            <p>
              On our journey to be fully open-sourced, decentralized and autonomous, CrayonDAO is the DAO of DAOs that govern platform decisions with
              the native token <strong class="text-third">$CRAY</strong>.
            </p>
            <b-btn
              variant="text text-white p-0 text-24 ml-md-auto d-inline-flex"
              class="d-flex align-items-center"
              :href="$urls['$CRAY']"
              target="_blank"
            >
              <span> Learn more about <strong class="text-third">$CRAY</strong></span>
              <i class="icon icon-next icon-18 ml-2 mb-n1" />
            </b-btn>
          </div>
        </div>
      </section>
      <!-- ! Join -->

      <!-- Backed by -->
      <section>
        <logos title="Backed By" :items="backedBy" />
      </section>
      <!-- ! Backed by -->

      <!-- Get Started -->
      <section id="getStarted">
        <b-btn variant="outline-third w-100" size="xl" pill :href="$urls['getStarted']" target="_blank"> Get Started </b-btn>
      </section>
      <!-- ! Get Started -->
    </b-container>
  </div>
</template>

<script>
import Logos from "@/components/logos";
export default {
  components: {
    Logos,
  },
  data() {
    return {
      guides: [
        {
          variant: "primary",
          name: "Create",
          text: "your DAO in minutes ",
        },
        {
          variant: "secondary",
          name: "Govern",
          text: "your community ",
        },
        {
          variant: "third",
          name: "Manage",
          text: "your portfolios with our finance tools",
        },
      ],
      partners: ["forbes", "coindesk", "cryptobriefing", "cointelegraph", "koreajoonangdaily"],
      cards: [
        {
          name: "create",
          variant: "primary",
          desc: "Setting up your DAO is just a few clicks away. Start investing today with your community.",
        },
        {
          name: "govern",
          variant: "secondary",
          desc: "Decision-making power to community. Progressively, governance will be decentralized and autonomous",
        },
        {
          name: "manage",
          variant: "third",
          desc: "On top of buy, hold and sell, we offer NFT backed loans and NFT rental/lease tools.",
        },
      ],
      backedBy: ["animocabrands", "brinc", "assemble"],
      email: null,
    };
  },
  computed: {},
  methods: {
    subscribe() {
      console.log("Subscribe", this.email);
      this.$bvToast.toast(`${this.email} subscribes now!`, {
        toaster: "b-toaster-bottom-center",
        solid: true,
        appendToast: true,
      });
    },
    // validate(type, val) {
    //   const rules = {
    //     email: (v) => [!v, v === "", !/^([w._-])*[a-zA-Z0-9]+([w._-])*([a-zA-Z0-9])+([w._-])+@([a-zA-Z0-9]+.)+[a-zA-Z0-9]{2,8}$/.test(v)],
    //   };
    //   return rules[type](val).some((el) => el);
    // },
  },
};
</script>

<style lang="scss" scoped>
// 첫섹션 타이틀
#intro {
  min-height: 80vh;
  padding: 0 72px;
  .title {
    margin-bottom: 105px;
    h1 {
      margin-bottom: 42px;
    }
    p.desc {
      font-size: 24.4px;
      line-height: 28px;
    }
  }
  @media all and (max-width: 992px) {
    min-height: 90vh;
    padding: 0;
    .title {
      margin-bottom: 30px;
      h1 {
        margin-bottom: 40px;
        font-weight: bold;
      }
      p.desc {
        font-size: 16px;
        line-height: 22px;
      }
    }
    .guide {
      width: 100%;
    }
  }
}

// club
#club {
  padding-top: 148px;
  .util {
    margin: 72px 0 98px;
  }
  @media all and (max-width: 992px) {
    padding: 100px 0;
    .util {
      margin: 50px 0;
    }
  }
}

// community
#community {
  padding: 148px 0;
  border-bottom: 1px solid #fff;
  .input-subscribe {
    margin-top: 62px;
    input.form-control {
      font-size: 24px;
      min-height: 70px;
      border-radius: 0;
      border: 2px solid #fff;
      background-color: transparent;
      color: #fff;
      padding: 19px 24px;
      &::placeholder {
        color: #fff;
      }
      &:focus {
        box-shadow: none;
      }
    }
    .btn {
      border-radius: 0;
      height: 100%;
      box-sizing: border-box;
      font-size: 24px;
      min-height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    small.feedback {
      display: block;
      margin-top: 27px;
    }
  }
  @media all and (max-width: 992px) {
    padding: 100px 0;
    .input-subscribe {
      margin-top: 50px;
      input.form-control {
        margin-bottom: 12px;
        font-size: 16px;
        padding: 14px 18px;
        min-height: 50px;
        border-width: 1px;
      }
      .btn {
        min-height: 50px;
      }
    }
    small.feedback {
      margin-top: 15px;
      color: #666;
    }
  }
}

// Join
#join {
  padding: 148px 0;
  .symbol {
    width: 50%;
    max-width: 572px;
  }
  h1 {
    font-size: 55px;
    margin-bottom: 36px;
    font-weight: bold;
  }
  p {
    font-size: 24px;
    line-height: 32px;
    max-width: 592px;
    margin-left: auto;
  }
  @media all and (max-width: 992px) {
    padding: 100px 0;
    h1 {
      font-size: 30px;
      margin-bottom: 0;
      font-weight: bold;
    }
    .symbol {
      margin-top: 50px;
      margin-bottom: 50px;
    }
    p {
      font-size: 16px;
      line-height: 22px;
    }
  }
}
// Get Started
#getStarted {
  padding: 148px 0 290px;
  @media all and (max-width: 992px) {
    padding: 100px 0;
  }
}
</style>
