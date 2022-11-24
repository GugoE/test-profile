<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: "UiCard"
}
</script>

<style scoped>
@import '@/assets/style/ui/card.scss';
</style>
