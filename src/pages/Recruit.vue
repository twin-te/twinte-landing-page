<template>
  <main class="recruit">
    <h1>Twin:te運営メンバー募集要項</h1>
    <p>
      Twin:teでは長期的な運用を目的として、運営メンバーを常時募集しています。<br>
      募集枠としては、「デザイナー」「フロントエンドエンジニア」「バックエンドエンジニア」「モバイルアプリエンジニア」
      となっておりますが、どの枠組みで応募していただいても別の枠の業務をすることができます。<br>
      有志団体（サークルのようなもの）ですので、柔軟に活動することが可能です。決まった活動時間等はありません。<br>
      すべての枠組みにおいて、筑波大学生のみの応募に限らせていただきます、ご了承ください。
      みなさまのご応募お待ちしております。
    </p>
    <p>
      <a href="https://forms.gle/qJBgqM21ojSQ7Q5L9">応募フォームはこちら</a>
    </p>
    <section class="role">
      <h2>Twin:te について</h2>
      <p>
        Twin:teは延べユーザ数約13,000人を抱える筑波大学生による筑波大学生専用の時間割アプリです。<br>
        時間割アプリ以外にも、ユーザが欲するサービスを開発することも可能です。<br>
        また、運営資金はユーザからの寄付によって成り立っています。<br>
        現在のアクティブメンバーは、<a href="https://www.twinte.net/#member">こちら</a>をご覧ください。<br>
        技術的な詳細は<a href="https://github.com/twin-te/">GitHub</a>をご覧ください。<br>

        この件に関するお問い合わせ先： 【Mail】info@twinte.net / 【Twitter】
        <a href="https://twitter.com/te_twin">@te_twin</a>
      </p>
    </section>
    <section class="role">
      <h2>デザイナー</h2>
      <p>Twin:teの各種サービスのデザインを担当していただきます。</p>
      <div class="requirements">
        <h3>【MUST要件】</h3>
        <ul>
          <li>UI/UXデザインの経験がある方</li>
          <li>チームでのアプリ開発に興味がある方</li>
          <li>院を含む残り在籍年数が3年以上の方</li>
        </ul>
        <h3>【WANT要件】</h3>
        <ul>
          <li>プロトタイピングツール(Figma、XDなど)を扱える方</li>
          <li>Vue.jsでアプリやWebサイトを作成した経験がある方</li>
          <li>
            Adobe PhotoshopやAdobe Illustratorなどのデザインツールを扱える方
          </li>
        </ul>
      </div>
    </section>
    <section class="role">
      <h2>フロントエンドエンジニア</h2>
      <p>Twin:teの各種サービスのフロントエンドを担当していただきます。</p>
      <div class="requirements">
        <h3>【MUST要件】</h3>
        <ul>
          <li>Webページを作成できるスキルがある方</li>
          <li>チーム開発に興味がある方</li>
          <li>院を含む残り在籍年数が3年以上の方</li>
        </ul>
        <h3>【WANT要件】</h3>
        <ul>
          <li>TypeScriptの利用経験がある方</li>
        </ul>
      </div>
    </section>
    <section class="role">
      <h2>バックエンドエンジニア</h2>
      <p>Twin:teの各種サービスのバックエンドを担当していただきます。</p>
      <div class="requirements">
        <h3>【MUST要件】</h3>
        <ul>
          <li>
            何かしらの言語でバックエンド開発の経験がある方（趣味・実務問わず）
          </li>
          <li>チーム開発に興味がある方</li>
          <li>院を含む残り在籍年数が3年以上の方</li>
        </ul>
        <h3>【WANT要件】</h3>
        <ul>
          <li>TypeScriptの利用経験がある方</li>
          <li>gRPCを触ったことがある方</li>
          <li>インフラやセキュリティの知見がある方</li>
        </ul>
      </div>
    </section>
    <section class="role">
      <h2>モバイルアプリエンジニア</h2>
      <p>
        Twin:teの各種サービスのiOS /
        Androidアプリ制作を担当していただきます。<br>
        現在Twin:teのモバイルアプリでは主にWebViewを利用しています。<br>
        そのため、モバイルアプリ上で実装しているのはウィジェットや通知などの機能のみになります。<br>
      </p>
      <div class="requirements">
        <h3>【MUST要件】</h3>
        <ul>
          <li>
            何かしらの言語で何らかの開発の経験がある方（趣味・実務問わず）
          </li>
          <li>チーム開発に興味がある方</li>
          <li>院を含む残り在籍年数が3年以上の方</li>
        </ul>
        <h3>【WANT要件】</h3>
        <ul>
          <li>KotlinもしくはSwiftの利用経験がある方</li>
        </ul>
      </div>
    </section>
    <footer>
      <section>
        <a
          id="back-link"
          href="../"
        >Twin:te公式サイトへもどる </a>
      </section>
    </footer>
  </main>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/variable';
@use '~/assets/scss/mixin';

main {
  padding: 3rem;
  font-size: 1.5rem;
  line-height: 150%;
}
.requirements {
  margin: 1rem;
}
.role {
  background-color: #fafafa;
  padding: 1rem;
}
h1 {
  font-size: 2rem;
  font-weight: 800;
  line-height: 160%;
  @include mixin.text-liner;
  margin-bottom: 2rem;
}
h2 {
  line-height: 160%;
  font-weight: 800;
  font-size: 1.6rem;
}
h3 {
  line-height: 150%;
  font-weight: 700;
  font-size: 1.6rem;
}
li {
  margin-left: 2rem;
  list-style: disc;
}
section {
  margin: 2rem 0 2rem 0;
}
#modification-day {
  font-weight: 1000;
  font-size: 1.6rem;
}
</style>
