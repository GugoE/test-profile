<template>
  <div class="profile">
    <UiLoader v-if="loader" />
    <div v-else class="container">
      <p class="profile__title">Profile Page</p>
      <div v-if="user" class="profile__cards">
        <UiCard class="profile__cards-item user">
          <div class="user__avatar">
            <img :src="user.image" alt="">
          </div>
          <p class="user__name">
            {{ userFio }}
          </p>
          <div class="user__list">
            <p class="user__list-item">Birth Date: <span>{{ user.birthDate }}</span></p>
            <p class="user__list-item">Email: <span>{{ user.email }}</span></p>
            <p class="user__list-item">Section: <span>{{ user.bloodGroup }}</span></p>
          </div>
        </UiCard>
        <UiCard class="profile__cards-item general-information">
          <p class="general-information__title">General information</p>
          <div class="general-information__table information-table">
            <div v-if="user.address" class="information-table__item">
              <p class="information-table__item_name">Address</p>
              <span>:</span>
              <p class="information-table__item_text">{{ user.address.city }} {{ user.address.address }}</p>
            </div>
            <div v-if="user.company" class="information-table__item">
              <p class="information-table__item_name">Company</p>
              <span>:</span>
              <p class="information-table__item_text">{{ user.company.name }} ({{ user.company.title }})</p>
            </div>
            <div v-if="user.domain" class="information-table__item">
              <p class="information-table__item_name">Domain</p>
              <span>:</span>
              <p class="information-table__item_text">{{ user.domain }}</p>
            </div>
            <div v-if="user.eyeColor" class="information-table__item">
              <p class="information-table__item_name">Eye color</p>
              <span>:</span>
              <p class="information-table__item_text">{{ user.eyeColor }}</p>
            </div>
            <div v-if="user.gender" class="information-table__item">
              <p class="information-table__item_name">Gender</p>
              <span>:</span>
              <p class="information-table__item_text text-capitalize">{{ user.gender }}</p>
            </div>
            <div v-if="user.phone" class="information-table__item">
              <p class="information-table__item_name">Phone</p>
              <span>:</span>
              <p class="information-table__item_text text-capitalize">{{ user.phone }}</p>
            </div>
            <div v-if="user.university" class="information-table__item">
              <p class="information-table__item_name">University</p>
              <span>:</span>
              <p class="information-table__item_text text-capitalize">{{ user.university }}</p>
            </div>
          </div>
        </UiCard>
      </div>
    </div>
  </div>
</template>

<script>
import { getCookie } from "@/utils/global";
import UiCard from '@/components/ui/Card'
import UiLoader from "@/components/ui/Loader";
export default {
  name: "ProfilePage",
  components: {UiLoader, UiCard},

  data: () => ({
    loader: true,
    user: null,
  }),

  created () {
    const userId = getCookie('userId')

    fetch(`https://dummyjson.com/users/${userId}`)
        .then(res => res.json())
        .then((res) => {
          this.user = res
          this.loader = false
        });
  },

  computed: {
    userFio() {
      const { firstName, lastName, username } = this.user
      return `${firstName} ${lastName}  ( ${username} ) `
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/views/profile.scss";
</style>
