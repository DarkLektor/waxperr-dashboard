<template>
  <div class="cards-grid">
    <template v-for="card in store.cards" :key="card.title">
      <long-card
          v-if="card.isLongCard"
          :item="card"
      ></long-card>

      <card v-else :item="card" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import Card from "@/components/Card.vue";
import {useCardsStore} from "@/stores/cards-store.ts";
import {CardType} from "@/types/card.type.ts";
import LongCard from "@/components/LongCard.vue";

const store: { cards: CardType[] } = useCardsStore();
</script>

<style lang="scss" scoped>
.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
