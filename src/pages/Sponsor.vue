<template>
  <main class="sponsorship">
    <h1>寄付者一覧</h1>
    <p>
      Twin:teに寄付をしていただき、許可いただいた方を掲載いたします。（敬称略）
    </p>
    <p>
      なお、収支報告書を<a
        href="https://drive.google.com/drive/folders/1nHj8w5LELC5ZTFnWvgF7HXPriMRovFSp?usp=sharing"
        style="color: #627fb4"
        >こちら</a
      >にて公開しております。
    </p>

    <div class="sponsor-wrap"></div>
    <hr />

    <transition name="fade">
      <p class="amount" v-if="amount != null">
        総寄付額 <strong>{{ amount }}</strong> 円
      </p>
    </transition>
    <transition name="fade">
      <p class="count" v-if="count != null">
        計 <strong>{{ count }}</strong> 人の方に寄付いただきました。
      </p>
    </transition>

    <transition name="fade">
      <div class="users" v-if="count != null && users != null">
        <a
          v-for="u in users"
          :href="u.link"
          :class="[u.link != null ? 'user-link' : '']"
          :key="u.users"
          target="_blank"
        >
          {{ u.nickname }}
          <i class="material-icons linkicon">link</i>
        </a>
      </div>
    </transition>
    <div class="loading" v-if="count == null || users == null">Loading</div>
    <h2 v-if="count != null && users != null">寄付はこちらから</h2>
    <a
      href="https://sponsorship.twinte.net"
      v-if="count != null && users != null"
    >
      <img class="sponsorpage-btn" src="../images/sponsor-ogp.png" />
    </a>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Sponsor",
  setup: () => {
    const count = ref<number>();
    const users = ref<any[]>();
    const amount = ref<number>();
    fetch("https://api.twinte.net/v1/payment/users")
      .then((res) => res.json())
      .then((data) => {
        count.value = data.count;
        users.value = data.users;
      });
    fetch("https://api.twinte.net/v1/payment/totalAmount")
      .then((res) => res.json())
      .then((data) => {
        amount.value = data.total;
      });

    return { count, users, amount };
  },
});
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";
.sponsorship {
  padding: 3rem;
}
h1 {
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 160%;
  @include text-liner;
  margin-bottom: 2rem;
}
p {
  @include text-discription;
}
.users {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  a {
    display: block;
    padding: 1rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

@keyframes loading-title-anim {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
.loading {
  margin-top: 5rem;
  text-align: center;
  font-size: 2em;
  animation: 1s ease 0s infinite normal none running loading-title-anim;
}
</style>
