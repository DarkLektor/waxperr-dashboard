<template>
  <div class="card">
    <div class="card-header">
      <i class="card-header-icon">
        <svg>
          <use :href="`/sprites.svg#${item.icon}`"></use>
        </svg>
      </i>
      <h5 class="card-header-title">
        {{ item.title }}
      </h5>
    </div>
    <p class="card-subtitle">
      {{ item.subtitle }}
    </p>
    <div class="card-body">
      <span :class="item?.textClass || 'text-gradient'" class="card-label">
        {{ item.label }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {CardType} from "@/types/card.type.ts";

const {item} = defineProps<{ item: CardType }>()
</script>

<style lang="scss">
.card {
  background: var(--dark-grey);
  padding: 24px 24px 24px 65px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &-header {
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;
    right: 44px;

    &-icon {
      flex-grow: 0;
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      border-radius: 50%;
      background: #262626;
      width: 32px;
      height: 32px;

      svg {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }

    &-title {
      font-weight: 500;
      font-size: 16px;
    }
  }

  &-subtitle {
    font-size: 14px;
    color: var(--light-grey);
    margin-bottom: 10px;
  }

  &-body {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    font-size: 30px;
    margin-top: auto;

    @media screen and (max-width: 550px) {
      font-size: 22px;
    }
  }
}
</style>
