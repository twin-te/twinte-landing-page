<template>
  <section class="option-featurs">
    <img
      class="option-featurs__title-image"
      src="../../images/option.png"
      alt="便利なオプション機能！"
    >
    <div class="item-wrapper">
      <div class="option-featurs__item opacity1">
        <div class="item__image">
          <img src="../../images/federation.png">
        </div>
        <div class="item__title">
          複数の端末でデータ連携
        </div>
        <div class="item__text">
          TwitterやGoogle、Appleアカウントのいずれかでログインすることで、複数の端末でデータの共有ができます。
        </div>
      </div>
      <div class="option-featurs__item opacity2">
        <div class="item__image">
          <img src="../../images/push.png">
        </div>
        <div class="item__title">
          特殊日程をプッシュ通知でお知らせ
        </div>
        <div class="item__text">
          翌日が特殊日程の場合、プッシュ通知でお知らせします。日課変更を忘れて当日に慌ててしまう心配もありません。
        </div>
      </div>
      <div class="option-featurs__item opacity3">
        <div class="item__image">
          <img src="../../images/widjet.png">
        </div>
        <div class="item__title">
          ウィジェットで今日の授業を確認
        </div>
        <div class="item__text">
          ウィジェットによって今日の時間割や現在の授業、次の授業が簡単に確認できます。
          もちろん今日が特殊な日程でも問題ありません。
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variable';
@use '~/assets/scss/mixin';

.option-featurs {
  background: variable.$base;
  &__item {
    width: 272px;
  }
  @include mixin.sp {
    padding: 8rem 5rem;
  }

  @include mixin.tablet {
    padding: 8rem 6rem;
  }

  @include mixin.pc {
    padding: 8rem 0 14rem;
  }
  &__item {
    width: 100%;
    @include mixin.pc {
      width: 272px;
    }
  }
  &__title-image {
    display: block;
    width: 30rem;
    margin: 0 auto 4.8rem;
    @include mixin.sp {
      width: 24.5rem;
    }
  }
}

.item-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  @include mixin.pc {
    margin: auto;
    max-width: 928px;
    flex-direction: row;
  }
}

.item {
  &__image {
    margin-bottom: 2.4rem;
    img {
      display: block;
      margin: auto;
      @include mixin.sp {
        width: 100%;
      }
      @include mixin.tablet {
        width: 70%;
      }
      @include mixin.pc {
        width: 100%;
      }
    }
  }
  &__title {
    margin-bottom: 1.6rem;
    line-height: 140%;
    font-size: 2rem;
    font-weight: 500;
  }
  &__text {
    font-size: 1.4rem;
    line-height: 180%;
    @include mixin.sp {
      margin-bottom: 4rem;
    }
    @include mixin.tablet {
      margin-bottom: 5.6rem;
    }
    @include mixin.pc {
      margin-bottom: 0;
    }
  }
}
</style>
