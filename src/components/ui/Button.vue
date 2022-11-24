<template>
  <button
      @click="$emit('click', $event)"
      :class="['btn', 'btn__type-' + type, { ['btn__align_' + align]: align }]"
      :style="{
        height,
        width,
        border: !hasBorder ? 'none' : '1px solid inherit',
      }"
      :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'UiButton',

  props: {
    align: {type: String, default: 'center' },
    hasBorder: { default: true, type: Boolean },
    type: { default: 'warning', type: String },
    height: { default: 'auto', type: String },
    width: { default: 'auto', type: String },
    disabled: { default: false, type: Boolean },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/ui/Button';
</style>
