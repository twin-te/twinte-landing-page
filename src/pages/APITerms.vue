<template>
  <div class="terms">
    <h1>Twin:te 外部連携機能に関する規約</h1>
    <p>
      Twin:teは，外部から授業をインポートする機能を用意しております。
      開発者用のドキュメントは<a
        href="https://github.com/twin-te/twinte-landing-page/tree/main/docs"
      >こちら</a>をご覧ください。 この機能の利用者は以下の規約を遵守する必要があります。
    </p>

    <p>
      なお、本規約は、<a href="/terms">利用規約</a>に定める個別規定に該当します。また、本規約の他、<a href="/terms">利用規約</a>を遵守する必要があります。
    </p>
    <section>
      <h2>第1条（適用）</h2>
      <ol>
        <li>
          本規約は，授業インポート用のリンクを発行や共有をする者（サービス）と，授業インポート用のリンクを利用して授業をインポートする者，その他Twin:teの外部連携機能を利用する者（サービス）に適用されます。
        </li>
      </ol>
    </section>
    <section>
      <h2>第2条（利用の制限）</h2>
      <ol>
        <li>
          各個人は，Twin:teの外部連携機能（授業を外部からインポートする機能を含む）を本規約と<a
            href="/terms"
          >利用規約</a>を遵守する場合に限り自由に利用することができます。
        </li>
        <li>
          Twin:teの外部連携機能（授業を外部からインポートする機能を含む）を利用したサービスを作成し不特定多数に向けて公開する場合は，Twin:te運営に許可を得る必要があります。
        </li>
        <li>
          Twin:te運営は外部連携機能（授業を外部からインポートする機能を含む）を，事前の予告なく変更や終了させることができるものとします。
        </li>
        <li>
          Twin:te運営は本規約に違反した者やサービスについて，外部連携機能（授業を外部からインポートする機能を含む）の利用の差し止めを行うことができるものとします。
        </li>
      </ol>
    </section>

    <footer>
      <section>
        <p id="modification-day">
          2022年6月10日初版発行
        </p>
        <a
          id="back-link"
          href="../"
        >Twin:te公式サイトへもどる </a>
      </section>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.terms {
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
  line-height: 160%;
  font-weight: 500;
  font-size: 1.6rem;
}
ol {
  list-style: inside;
  list-style-type: decimal;
}
ol,
p {
  margin: 0;
  @include text-description;
}
li {
  padding-left: 1.4rem;
}
section {
  margin-bottom: 2rem;
}
#modification-day {
  font-weight: 1000;
  font-size: 1.6rem;
}
</style>
