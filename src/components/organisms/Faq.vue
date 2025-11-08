<template>
  <section
    id="faq"
    class="faq"
  >
    <ParticleSectionTitle title="Q&A" />
    <div class="faq__row">
      <ParticleFaqItem
        question="このサービスは大学公式のものですか？"
        answer="いいえ。筑波大学生の有志によるものです。"
      >
        <template #body>
          筑波大学生によって構成されたグループ（Twin:te）が、日常の不便を解消するために製作したサービスです。
          <br>主な構成員は<a href="#member">主メンバー</a>をご覧ください。
        </template>
      </ParticleFaqItem>
    </div>
    <div class="faq__row">
      <ParticleFaqItem
        question="Twin:teが保存するデータは何ですか？"
        answer="ユーザーの所有する端末間で情報を共有するためのデータのみを保存しています。"
      >
        <template #body>
          複数端末で時間割情報を共有するため、
          Twin:teはユーザーがTwin:teのログインに利用した外部アカウントと、保存した時間割の情報（メモ・出席欠席遅刻回数・変更した教室情報等を含む）
          を結び付けて保存します。<br>
          この情報はログインしたユーザーのみが見ることができる物であり、他のユーザーには共有されません。<br>
          なお、Twin:teはログインに利用した外部アカウントのパスワードや、学籍番号等の情報は一切保存しておりません。
          詳細は<a href="/terms">利用規約</a>をご覧ください。
        </template>
      </ParticleFaqItem>
    </div>
    <div class="faq__row">
      <ParticleFaqItem
        question="利用は無料ですか？"
        answer="利用は完全無料です。"
      >
        <template #body>
          また、広告もございません。 なお、<a
            href="https://app.twinte.net/sponsorship"
          >こちら</a>にて寄付を受け付けております。
          これまでの寄付金総額や寄付にご協力いただいた方々は<a href="https://app.twinte.net/sponsorship/sponsors-list">こちら</a>のページに掲載しています。
        </template>
      </ParticleFaqItem>
    </div>
    <div class="faq__row">
      <ParticleFaqItem
        question="TWINSの履修情報を自動で読み込めますか ?"
        answer="はい。Twin:teのサーバーがユーザーの情報を取得することなく、TWINSの情報を読み込めます。"
      >
        <template #body>
          ユーザーが自分でTWINSにログインしたあと、「Twin:teにインポート」ボタンを押すことで利用できます。
          <br>ユーザーが自分でTWINSにログインをするので、Twin:teはユーザーの学籍番号・パスワードを取得することはございません。
          。<br>この機能はiOS・Android版Twin:teのみで利用できます
          この機能に不安を覚える場合は他の時間割登録方法をご利用いただけます。
        </template>
      </ParticleFaqItem>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variable';
@use '~/assets/scss/mixin';

.faq {
  a {
    &:link {
      color: variable.$text-link;
      text-decoration: none;
    }
  }
  background: url(~/images/bg-graphic2.jpg);
  background-size: cover;
  &__row {
    margin-bottom: 3.2rem;
    @include mixin.pc {
      margin: 0 auto 3.2rem;
      width: 90rem;
    }
  }
  @include mixin.sp {
    padding: 8rem 2rem;
  }

  @include mixin.tablet {
    padding: 8rem 6rem;
  }

  @include mixin.pc {
    padding: 8rem 0 8rem;
  }
}
</style>
