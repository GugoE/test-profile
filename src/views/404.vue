<template>
  <div class="not-found">
    <p class="not-found__title">404</p>
    <p class="not-found__subtitle">Page not found</p>
    <UiButton @click="goProfile" width="150px" height="30px">Back To Profile</UiButton>
  </div>
</template>

<script>
import { PROFILE_NAME } from '@/router/routes.json'

import UiButton from "@/components/ui/Button";
export default {
  name: "PageNotFound",
  components: { UiButton },

  methods: {
    goProfile() {
      this.$router.push({name: PROFILE_NAME})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/views/404.scss";
</style>
