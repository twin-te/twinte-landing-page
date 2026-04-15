<template>
  <section
    id="recruit-banner"
    class="recruit-banner"
  >
    <div class="recruit-banner__inner">
      <h2 class="recruit-banner__title">
        Twin:te 開発メンバー<br>
        募集中
      </h2>
      <p class="recruit-banner__description">
        Twin:teでは長期的な運用を目的として、運営メンバーを常時募集しています。<br>
        みなさまのご応募お待ちしております。<br>
        すべての枠組みにおいて、筑波大学生のみの応募に限らせていただきます、ご了承ください。
      </p>
      <div class="recruit-banner__actions">
        <a
          :href="RECRUIT_GUIDELINE_SLIDES_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="recruit-banner__button recruit-banner__button--outline"
        >
          <span class="recruit-banner__button-text">募集要項</span>
        </a>
        <a
          :href="RECRUIT_APPLICATION_FORM_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="recruit-banner__button recruit-banner__button--primary"
        >
          <span class="recruit-banner__button-text">応募フォーム</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  RECRUIT_APPLICATION_FORM_URL,
  RECRUIT_GUIDELINE_SLIDES_URL,
} from '~/constants/links'
</script>

<style scoped lang="scss">
@use '~/assets/scss/variable';
@use '~/assets/scss/mixin';

.recruit-banner {
  scroll-margin-top: 9rem;
  background: url('~/images/bg-graphic1.jpg');
  background-size: cover;
  color: variable.$white;

  @include mixin.pc {
    padding: 9rem 0;
  }

  @include mixin.tablet {
    padding: 8rem 6rem;
  }

  @include mixin.sp {
    padding: 8rem 2rem;
  }

  &__inner {
    margin: 0 auto;
    text-align: center;

    @include mixin.pc {
      width: 90rem;
    }

    @include mixin.tablet {
      max-width: 56rem;
      text-align: left;
    }

    @include mixin.sp {
      max-width: 42rem;
      text-align: left;
    }
  }

  &__title {
    font-weight: 800;
    line-height: 160%;

    @include mixin.pc {
      font-size: 2.4rem;
      margin-bottom: 4rem;
    }

    @include mixin.tab-and-sp {
      font-size: 2.2rem;
      margin-bottom: 3.2rem;
      text-align: center;
    }
  }

  &__description {
    font-weight: 500;
    line-height: 200%;

    @include mixin.pc {
      font-size: 1.4rem;
      margin-bottom: 6rem;
    }

    @include mixin.tab-and-sp {
      font-size: 1.4rem;
      margin-bottom: 4rem;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: center;

    @include mixin.pc {
      gap: 8.51rem;
    }

    @include mixin.tablet {
      gap: 5.6rem;
    }

    @include mixin.sp {
      gap: 2.8rem;
    }
  }

  &__button {
    @include mixin.center-flex;
    @include mixin.button-cursor;

    width: 22.59rem;
    height: 4.4rem;
    border-radius: 2.205rem;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 160%;
    text-decoration: none;
    box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.15);

    @include mixin.pc {
      height: 4.41rem;
    }

    @include mixin.tablet {
      width: 17.6rem;
      border-radius: 2.2rem;
    }

    @include mixin.sp {
      width: 15.1rem;
      border-radius: 2.2rem;
    }

    &-text {
      letter-spacing: 0;
      white-space: nowrap;
    }

    &--outline {
      background: variable.$white;
    }

    &--outline &-text {
      background: variable.$primary-liner;
      background-clip: text;
      color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &--primary {
      background: #e9ff21;
      color: variable.$text-sub;
    }
  }
}
</style>
