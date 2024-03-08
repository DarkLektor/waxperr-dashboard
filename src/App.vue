<template>
  <main>
    <div class="container">
      <h1>
        <img alt="logo" class="logo" src="/logo.svg">
      </h1>

      <cards-grid />
    </div>
  </main>
</template>

<script lang="ts" setup>
import CardsGrid from "@/components/CardsGrid.vue";
</script>

<style lang="scss" scoped>
main {
  background: var(--black);
  min-height: 100vh;
  padding: 32px 0;
}

.logo {
  margin-bottom: 65px;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
}
</style>
