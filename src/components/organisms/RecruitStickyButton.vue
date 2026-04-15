<template>
  <a
    href="#recruit-banner"
    class="recruit-sticky-button"
  >
    <span
      class="recruit-sticky-button__star"
      aria-hidden="true"
    >
      <span class="recruit-sticky-button__star-shape" />
    </span>
    <span class="recruit-sticky-button__main">
      メンバー<br>
      募集中
    </span>
    <span class="recruit-sticky-button__sub">CLICK▶︎</span>
  </a>
</template>

<style scoped lang="scss">
@use '~/assets/scss/variable';
@use '~/assets/scss/mixin';

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
  z-index: 9;
  isolation: isolate;
  color: variable.$text-main;
  font-weight: 700;
  line-height: 130%;
  text-align: center;
  text-decoration: none;

  &__star {
    position: absolute;
    inset: -0.8rem;
    z-index: 0;
    filter:
      drop-shadow(0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.15))
      drop-shadow(0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.15))
      drop-shadow(0.4rem 0.4rem 0.2rem rgba(0, 0, 0, 0.25));
    pointer-events: none;
  }

  &__star-shape {
    @include recruit-star-shape;

    position: absolute;
    inset: 0.8rem;
    background: #e9ff21;
  }

  &:link {
    color: variable.$text-main;
  }

  @include mixin.pc {
    top: 9.8rem;
    right: 2.8rem;
    width: 13.4rem;
    height: 13.4rem;
    font-size: 1.8rem;
  }

  @include mixin.tablet {
    top: 9.8rem;
    right: 4.4rem;
    width: 12.5rem;
    height: 12.5rem;
    font-size: 1.6rem;
  }

  @include mixin.sp {
    top: 9.6rem;
    right: 1.8rem;
    width: 9rem;
    height: 9rem;
    font-size: 1.3rem;
  }

  &__main {
    position: relative;
    z-index: 2;
    margin-top: 0.8rem;
  }

  &__sub {
    position: relative;
    z-index: 2;
    margin-top: 0.2rem;
    color: variable.$text-sub;
    font-size: 0.66em;
    letter-spacing: 0;
  }
}
</style>
