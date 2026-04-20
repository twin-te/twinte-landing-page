<template>
  <a href="#recruit-banner" class="recruit-sticky-button">
    <span class="recruit-sticky-button__star" aria-hidden="true">
      <span class="recruit-sticky-button__star-shape" />
    </span>
    <span class="recruit-sticky-button__main">
      メンバー<br />
      募集中
    </span>
    <span class="recruit-sticky-button__sub">CLICK▶︎</span>
  </a>
</template>

<style scoped lang="scss">
@use "~/assets/scss/variable";
@use "~/assets/scss/mixin";

@mixin recruit-star-shape {
  clip-path: polygon(
    50% 0%,
    60.35% 11.36%,
    75% 6.7%,
    78.28% 21.72%,
    93.3% 25%,
    88.64% 39.65%,
    100% 50%,
    88.64% 60.35%,
    93.3% 75%,
    78.28% 78.28%,
    75% 93.3%,
    60.35% 88.64%,
    50% 100%,
    39.65% 88.64%,
    25% 93.3%,
    21.72% 78.28%,
    6.7% 75%,
    11.36% 60.35%,
    0% 50%,
    11.36% 39.65%,
    6.7% 25%,
    21.72% 21.72%,
    25% 6.7%,
    39.65% 11.36%
  );
}

.recruit-sticky-button {
  @include mixin.center-flex(column);
  @include mixin.button-cursor;

  position: fixed;
  z-index: 5;
  color: variable.$text-main;
  font-weight: bold;
  line-height: 130%;
  text-align: center;
  text-decoration: none;

  @include mixin.pc {
    top: 9.8rem;
    right: 2.8rem;
    width: 13.4rem;
    height: 13.4rem;
    font-size: 1.8rem;
  }

  @include mixin.tablet {
    top: 10.8rem;
    right: 0.9rem;
    width: 9.4rem;
    height: 9.4rem;
    font-size: 1.2rem;
  }

  @include mixin.sp {
    position: absolute;
    top: 7.8rem;
    right: 1.3rem;
    width: 8.6rem;
    height: 8.6rem;
    font-size: 1.2rem;
  }

  &__star {
    position: absolute;
    inset: 0;
    filter: drop-shadow(0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.15))
      drop-shadow(0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.15))
      drop-shadow(0.4rem 0.4rem 0.2rem rgba(0, 0, 0, 0.25));
  }

  &__star-shape {
    @include recruit-star-shape;

    position: absolute;
    inset: 0;
    background: variable.$yellow;
  }

  &__main {
    position: relative;
    margin-top: 0.8rem;
  }

  &__sub {
    position: relative;
    color: variable.$text-sub;
    font-size: 0.7em;
  }
}
</style>
