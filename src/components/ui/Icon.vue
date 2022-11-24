<template>
  <svg
      @click.stop="$emit('click')"
      :fill="
        mode === 'fill'
          ? color
          : 'transparent'
      "
      :stroke="
        mode === 'stroke'
          ? color
          : 'transparent'
      "
      :style="{height, width}"
  >
    <use :href="sprite + '#' + value" />
  </svg>
</template>

<script>
import IconsSprite from '../../assets/svg/icons.svg'
export default {
  name: "UiIcon",

  props: {
    value: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'fill'
    },
    color: {
      type: String,
      default: 'red'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },

  computed: {
    sprite() {
      return IconsSprite
    }
  }
}
</script>
