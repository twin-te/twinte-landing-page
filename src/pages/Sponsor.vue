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
      <!-- <p class="amount" v-if="amount">
        総寄付額 <strong>{{ amount }}</strong> 円
      </p> -->
    </transition>
    <transition name="fade">
      <!-- <p class="count" v-if="count">
        計 <strong>{{ count }}</strong> 人の方に寄付いただきました。
      </p> -->
    </transition>

    <!-- <transition name="fade">
      <div class="users" v-if="count && users">
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
    <div class="loading" v-if="!count || !users">Loading</div>
    <h2 v-if="count && users">寄付はこちらから</h2>
    <a href="https://sponsorship.twinte.net" v-if="count && users">
      <img class="sponsorpage-btn" src="../images/sponsor-ogp.png" />
    </a> -->
  </main>
</template>

<script>
// var app = new Vue({
//   el: "#sponsorship",
//   mounted() {
//     fetch("https://api.twinte.net/v1/payment/users")
//       .then((res) => res.json())
//       .then((data) => {
//         this.count = data.count;
//         this.users = data.users;
//       });
//     fetch("https://api.twinte.net/v1/payment/totalAmount")
//       .then((res) => res.json())
//       .then((data) => {
//         this.amount = data.total;
//       });
//   },
//   data: function () {
//     return {
//       count: null,
//       users: null,
//       amount: null,
//     };
//   },
// });
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
