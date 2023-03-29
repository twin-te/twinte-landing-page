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
        総寄付額 <span>{{ amount }}</span> 円
      </p>
    </transition>
    <transition name="fade">
      <p class="count" v-if="count != null">
        計 <span>{{ count }}</span> 人の方に寄付いただきました。
      </p>
    </transition>

    <transition name="fade">
      <div class="users" v-if="count != null && users != null">
        <a
          v-for="user in users"
          :href="user.link"
          :class="[user.link != null ? 'user-link' : '']"
          :key="user.displayName"
          target="_blank"
        >
          {{ user.displayName }}
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
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Sponsor',
  setup: () => {
    const count = ref<number>();
    const users = ref<any[]>();
    const amount = ref<number>();
    fetch('https://app.twinte.net/api/v3/donation/aggregate/totalAmount')
      .then((res) => res.json())
      .then((data) => {
        amount.value = data.total;
      });
    fetch('https://app.twinte.net/api/v3/donation/aggregate/users')
      .then((res) => res.json())
      .then((data) => {
        users.value = data;
        count.value = data.length;
      });

    return { count, users, amount };
  },
});
</script>

<style lang="scss" scoped>
@import '~/scss/main.scss';
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
h2 {
  margin-top: 6rem;
  text-align: center;
  font-size: 1.6rem;
}
p {
  @include text-discription;
}
.users {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: $button-gray;
  a {
    display: block;
    padding: 1rem;
    color: $button-gray;
  }
}
.sponsor-wrap {
  margin: 6% auto;
}
.amount {
  text-align: center;
  font-size: 2.3rem;
  padding-top: 1rem;
  @include text-liner;
  font-weight: 400;
  span {
    font-weight: 700;
  }
}
.count {
  font-size: 1.8rem;
  text-align: center;
  color: $text-main;
  font-weight: 400;
  span {
    font-weight: 700;
  }
}
.users {
  color: $button-gray;
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: 0.2s;
  a {
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
  }
  a.user-link {
    text-decoration: underline;
    &:hover {
      color: lighten($button-gray, 30%);
    }
    &:hover .linkicon {
      opacity: 1;
    }
  }
  .linkicon {
    opacity: 0;
    display: inline-flex;
    font-family: 'Material Icons';
    color: $button-gray;
    content: '\e157';
    vertical-align: middle;
    transition: 0.2s;
  }
}

hr {
  border-top: 0.5px solid $unselected;
}
.sponsorpage-btn {
  display: block;
  margin: 0 auto;
  padding-top: 1.2rem;
  width: 40rem;
  max-width: 80vw;
  height: auto;
  transition: 0.1s ease-in;
  &:hover {
    filter: contrast(80%) brightness(1.2);
    will-change: filter;
  }
  &:active {
    filter: contrast(100%) brightness(1);
    will-change: filter;
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
