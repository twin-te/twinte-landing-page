<template>
  <section id="faq" class="faq">
    <SectionTitle title="Q&A" />
    <div class="faq__row">
      <FaqItem
        question="このサービスは大学公式のものですか？"
        answer="いいえ。筑波大生の有志によるものです。"
      >
        <template #body>
          これは筑波大生によって構成されたグループ（Twin:te）が、日常の不便を解消するために製作したサービスです。
          <br />主な構成員は<a href="#member">主メンバー</a>をご覧ください。
        </template>
      </FaqItem>
    </div>
    <div class="faq__row">
      <FaqItem
        question="Twin:teが保存するデータは何ですか？"
        answer="ユーザーの複数端末を紐付けるためのデータのみを保存しています。"
      >
        <template #body>
          複数端末で共有するためTwin:teはユーザーがTwin:teのログインに利用したTwittterアカウント/Googleアカウントと、保存した時間割の情報（メモ・出席欠席遅刻回数・変更した教室情報等を含む）
          を結び付けて保存します。
          <br />この情報はログインしたユーザーのみが見ることができる物であり、他のユーザーには共有されません。
          <br />なお、Twin:teはログインに利用したTwittterアカウント/Googleアカウントのパスワードや、学籍番号等の情報は一切保存しておりません。
          詳細は<a href="/terms">利用規約</a>をご覧ください。
        </template>
      </FaqItem>
    </div>
    <div class="faq__row">
      <FaqItem question="利用は無料ですか？" answer="利用は完全無料です。">
        <template #body>
          また、広告もございません。 なお、<a
            href="https://sponsorship.twinte.net"
            >こちら</a
          >にて寄付を受け付けております。
          これまでの寄付金総額や寄付にご協力いただいた方々は<a href="/sponsor"
            >こちら</a
          >のページに掲載しています。
        </template>
      </FaqItem>
    </div>
    <div class="faq__row">
      <FaqItem
        question="Twinsの履修情報を自動で読み込めますか ?"
        answer="はい。Twin:teのサーバーがユーザーの情報を取得することなく、Twinsの情報を読み込めます。"
      >
        <template #body>
          ユーザーが自分でTwinsにログインしたあと、「Twin:teにインポート」ボタンを押すことで利用できます。
          <br />ユーザーが自分でTwinsにログインをするので、Twin:teはユーザーの学籍番号・パスワードを取得することはございません。
          。<br />この機能はiOS・Android版Twin:teのみで利用できます
          この機能に不安を覚える場合は他の時間割登録方法をご利用いただけます。
        </template>
      </FaqItem>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FaqItem from '~/components/FaqItem.vue';
import SectionTitle from '~/components/SectionTitle.vue';

export default defineComponent({
  components: { FaqItem, SectionTitle },
});
</script>

<style lang="scss" scoped>
@import '~/scss/main.scss';

.faq {
  a {
    &:link {
      color: $text-link;
      text-decoration: none;
    }
  }
  background: url(~/images/bg-graphic2.jpg);
  background-size: cover;
  &__row {
    margin-bottom: 3.2rem;
    @include pc {
      margin: 0 auto 3.2rem;
      width: 90rem;
    }
  }
  @include sp {
    padding: 8rem 2rem;
  }

  @include tablet {
    padding: 8rem 6rem;
  }

  @include pc {
    padding: 8rem 0 8rem;
  }
}
</style>
