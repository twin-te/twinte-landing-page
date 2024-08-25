<template>
  <section id="other-member" class="other-member">
    <ParticleSectionTitle title="その他のメンバー" />
    <Suspense>
      <div class="other-member__content">
        <div class="other-member__content-cards">
          <ParticleMemberItem
            v-for="(member, index) in otherMembers"
            :key="index"
            :imagePath="member.imagePath"
            :name="member.name"
            :desc="member.description"
            :link="{
              text: member.links.website?.label || '',
              href: member.links.website?.url || '',
            }"
            :iconLinks="{
              github: member.links.githubId
                ? `https://github.com/${member.links.githubId}`
                : '',
              twitter: member.links.twitterId
                ? `https://x.com/${member.links.twitterId}`
                : '',
            }"
          ></ParticleMemberItem>
        </div>
        <div class="other-member__content-link opacity2">
          <NuxtLink to="/#member">&lt; 戻る</NuxtLink>
        </div>
      </div>
    </Suspense>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { members } from './members';

export default defineComponent({
  setup: () => {},
  data() {
    return {
      otherMembers: members.filter((member) => !member.isActive),
    };
  },
});
</script>

<style lang="scss" scoped>
@import '~/scss/main.scss';

.other-member {
  @include sp {
    padding: 8rem 2rem;
  }

  @include tablet {
    padding: 8rem 6rem;
  }

  @include pc {
    padding: 8rem 0 14rem;
  }
  &__content {
    @include tablet {
      margin: auto;
      width: calc(220px * 2 + 16px * 3);
    }

    @include pc {
      margin: auto;
      width: calc(220px * 4 + 16px * 3);
    }
    &-link {
      margin: 16px;
      a {
        color: $text-link;
        text-decoration: none;
      }
    }
    &-cards {
      display: grid;
      grid-auto-flow: row;
      grid-template-rows: auto;
      gap: 16px;
      @include tablet {
        grid-template-columns: repeat(auto-fit, 22rem);
      }

      @include pc {
        grid-template-columns: repeat(auto-fit, 22rem);
      }
    }
  }
}
</style>
