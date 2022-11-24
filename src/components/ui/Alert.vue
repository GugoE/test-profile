<template>
  <transition name="slide-fade">
    <div v-if="modelValue" :class="['alert', 'alert__' + type]">
      <UiIcon :value="icon" width="24px" height="24px" />
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import UiIcon from "@/components/ui/Icon";
export default {
  name: "UiAlert",
  components: {UiIcon},

  model: {
    prop: 'modelValue',
  },

  props: {
    modelValue: Boolean,

    type: {
      type: String,
      default: 'error'
    }
  },

  computed: {
    icon () {
      return this.type === 'error' ? 'error' : 'double-checks'
    }
  },

  watch: {
    modelValue(val) {
      if(val) {
        setTimeout(()=> {
          this.$emit('input', false)
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/ui/alert.scss';
</style>
