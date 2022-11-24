<template>
  <div :class="['input', {'icon-right': canClear || showPassword, error: error, disabled: disabled }]" :style="{ width: width}">
    <div v-if="label" class="input__label">{{ activeLabel }}</div>
    <div class="input__inner">
      <input :type="myType" :value="value" @input="updateValue" />
      <UiIcon v-if="showPassword" @click="changeVisibility" class="input__icon"  width="24px" height="24px" :value="eyesIcon" />
      <transition name="scale" appear>
        <UiIcon
            class="input__icon"
            v-if="canClear && value"
            @click="clearValue"
            value="close" width="24px" height="24px"/>
      </transition>
    </div>
    <transition name="error" appear>
      <div
          v-if="error"
          class="input__error">
        {{ errorText }}
      </div>
    </transition>
  </div>
</template>

<script>
import UiIcon from '@/components/ui/Icon'

export default {
  name: 'UiInput',
  components: { UiIcon },


  props: {
    value: [String, Number],
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorText: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%',
    },
    canClear: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    passwordShow: false
  }),

  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },

    clearValue() {
      this.$emit('input', '')
    },

    changeVisibility() {
      this.passwordShow = !this.passwordShow
    }
  },

  computed: {
    activeLabel() {
      return this.label.split(':').join(' ')
    },

    myType() {
      return this.passwordShow ? 'text' : this.type
    },

    showPassword() {
      return this.type === 'password'
    },

    eyesIcon() {
      return this.passwordShow ? 'eye-open' : 'eye-slashed'
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/ui/input.scss";
</style>
