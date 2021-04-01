<template>
  <section class="member-item opacity">
    <div class="member-item__icon">
      <img :src="img" alt="メンバーの顔写真" />
    </div>
    <div class="member-item__name">{{ name }}</div>
    <div class="member-item__desc">{{ desc }}</div>
    <a v-if="link.href !== ''" class="member-item__link" :href="link.href"
      ><span class="material-icons">link</span>{{ link.text }}</a
    >
    <div class="member-item__icon-link">
      <div v-if="iconLinks.twitter !== ''" class="icon-link icon-link__twitter">
        <a :href="iconLinks.twitter"><img src="../images/twitter.svg" /></a>
      </div>
      <div v-if="iconLinks.github !== ''" class="icon-link icon-link__github">
        <a :href="iconLinks.github"><img src="../images/github.png" /></a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  components: {},
  props: {
    imagePath: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    link: {
      type: Object as PropType<{ text: string; href: string }>,
      required: true,
    },
    iconLinks: {
      type: Object as PropType<{ github: string; twitter: string }>,
      required: true,
    },
  },
  setup: async (props) => {
    const img = ref((await import(`../images/${props.imagePath}.jpg`)).default);
    return {
      img,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '~/scss/main.scss';
.member-item {
  box-sizing: border-box;
  padding: 24px 17px;
  background: $base-liner;
  box-shadow: $shadow-base;
  display: grid;
  width: 220px;
  grid-template:
    'icon     ' 120px
    '...      ' 28px
    'name     '
    '...      ' 8px
    'desc     ' 66px
    '...      ' 16px
    'link     ' 22px
    '...      ' 12px
    'icon-link' 30px
    / 1fr;
  text-align: center;
  border-radius: 1.2rem;
  @include sp {
    width: 100%;
    grid-template:
      'icon ... name     '
      'icon ... ...      ' 8px
      'icon ... desc     '
      'icon ... ...      ' 4px
      'icon ... link     '
      'icon ... ...      ' 12px
      'icon ... icon-link'
      / 104px 28px 1fr;
    text-align: start;
  }
  &__icon {
    @include center-flex;
    grid-area: icon;
    height: 120px;
    width: 120px;
    margin: auto;
    img {
      width: 100%;
      border-radius: 100%;
    }
    @include sp {
      width: 104px;
    }
  }
  &__name {
    grid-area: name;
    line-height: 160%;
    font-size: 1.6rem;
    font-weight: bold;
  }
  &__desc {
    grid-area: desc;
    line-height: 160%;
  }
  &__link {
    @include button-cursor;
    grid-area: link;
    color: $button-gray;
    text-decoration: none;
    span {
      @include iconlayout;
      font-size: 2rem;
      margin-right: 0.5rem;
    }
  }
  &__icon-link {
    grid-area: icon-link;
    display: flex;
    justify-content: center;
    bottom: 0;
    @include sp {
      justify-content: flex-start;
    }
  }
}

.icon-link {
  img {
    width: 100%;
  }
  width: 3rem;
  &:not(:last-child) {
    margin-right: 2rem;
  }
}
</style>
