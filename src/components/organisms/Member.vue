<template>
  <section
    id="member"
    class="member"
  >
    <ParticleSectionTitle title="主メンバー" />
    <Suspense>
      <div class="member__content">
        <div class="member__content-cards">
          <ParticleMemberItem
            v-for="(member, index) in activeMembers"
            :key="index"
            :image-path="member.imagePath"
            :name="member.name"
            :desc="member.description"
            :link="{
              text: member.links.website?.label || '',
              href: member.links.website?.url || '',
            }"
            :icon-links="{
              github: member.links.githubId
                ? `https://github.com/${member.links.githubId}`
                : '',
              twitter: member.links.twitterId
                ? `https://x.com/${member.links.twitterId}`
                : '',
            }"
          />
        </div>
        <div class="member__content-link opacity2">
          <NuxtLink to="/othermember">OB / OG &gt;</NuxtLink>
        </div>
      </div>
    </Suspense>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { members } from './members'

export default defineComponent({
  setup: () => {},
  data() {
    return {
      activeMembers: members.filter(member => member.isActive),
    }
  },
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variable';
@use '~/assets/scss/mixin';

.member {
  @include mixin.sp {
    padding: 8rem 2rem;
  }

  @include mixin.tablet {
    padding: 8rem 6rem;
  }

  @include mixin.pc {
    padding: 8rem 0 14rem;
  }
  &__content {
    @include mixin.tablet {
      margin: auto;
      width: calc(220px * 2 + 16px * 3);
    }

    @include mixin.pc {
      margin: auto;
      width: calc(220px * 4 + 16px * 3);
    }
    &-link {
      margin: 16px;
      text-align: right;
      a {
        color: variable.$text-link;
        text-decoration: none;
      }
    }
    &-cards {
      display: grid;
      grid-auto-flow: row;
      grid-template-rows: auto;
      gap: 16px;
      @include mixin.tablet {
        grid-template-columns: repeat(auto-fit, 22rem);
      }

      @include mixin.pc {
        grid-template-columns: repeat(auto-fit, 22rem);
      }
    }
  }
}
</style>
