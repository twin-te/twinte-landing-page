<template>
  <div class="sponsor">
    <div class="wrap">
      <img
        id="colon2"
        alt="マスコットキャラクター"
        src="../images/colon2.png"
      />
      <p>ただいまメンテナンス中です。</p>
      <a href="../">Twin:te公式サイトへもどる </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/scss/main.scss';
.sponsor {
  text-align: center;
  padding: 3rem;
}
.wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
p {
  margin: 20px 0 20px;
  @include text-discription;
}
#colon2 {
  width: 150px;
}
</style>
