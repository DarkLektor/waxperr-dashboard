<template>
  <a :href="props.link" class="icon-link" target="_blank">
    <img :src="`/images/${props.image}`" alt="" />
  </a>
</template>

<script lang="ts" setup>
import {IconLinkType} from "@/types/icon-link.type.ts";

const props = defineProps<IconLinkType>()
</script>

<style scoped>
.icon-link {
  border-radius: 50%;
  display: inline-block;
  width: 48px;
  height: 48px;
  color: red;
  transition: transform 0.3s ease-in-out;
  margin-left: 15px;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  @media screen and (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
}
</style>
