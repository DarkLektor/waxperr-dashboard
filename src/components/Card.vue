<template>
  <div class="card">
    <div class="card-header">
      <i class="card-header-icon">
        <svg>
          <use :href="`/sprites.svg#${item.icon}`"></use>
        </svg>
      </i>
      <h6 class="card-header-title">
        {{ item.title }}
      </h6>
    </div>
    <p class="card-subtitle card-small-text text-light-grey">
      {{ item.subtitle }}
    </p>
    <div class="card-body">
      <slot></slot>
      <span v-if="item.label" :class="item?.textClass || 'text-gradient'"
            class="card-label card-big-text">
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

  &-big-text {
    font-size: 30px;
    font-weight: 500;
  }

  &-small-text {
    font-size: 14px;
  }

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
      padding: 6px;
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
      font-size: 16px;
    }
  }

  &-subtitle {
    margin-bottom: 10px;
  }

  &-body {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;

    .card-time {
      font-size: 20px;
      color: var(--light-grey);
      margin-top: 6px;
    }

    .card-image {
      object-fit: contain;
      object-position: bottom right;
      max-height: 55px;
      width: 50%;
      height: 100%;
    }

  }

  @media screen and (max-width: 550px) {
    &-big-text {
      font-size: 22px;
    }
    &-body {
      .card-time {
        font-size: 16px;
        margin-top: 0;
      }
    }
  }
}
</style>
