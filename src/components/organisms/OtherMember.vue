<template>
  <section
    id="other-member"
    class="other-member"
  >
    <ParticleSectionTitle title="OB / OG" />
    <Suspense>
      <div class="other-member__content">
        <div class="other-member__content-cards">
          <ParticleMemberItem
            v-for="(member, index) in otherMembers"
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
        <div class="other-member__content-link opacity2">
          <NuxtLink to="/#member">&lt; 戻る</NuxtLink>
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
      otherMembers: members.filter(member => !member.isActive),
    }
  },
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variable';
@use '~/assets/scss/mixin';

.other-member {
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
