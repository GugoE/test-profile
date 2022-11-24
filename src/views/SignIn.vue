<template>
  <div class="sign-in">
    <div class="sign-in__backdrop">
      <p class="sign-in__title">Login your account</p>
      <UiInput
          v-model="login"
          :error="$v.login.$anyError"
          errorText="Required"
          placeholder="Email"
      />
      <UiInput
          v-model="password"
          type="password"
          :error="$v.password.$anyError"
          errorText="Required"
          placeholder="password"
      />
      <UiButton
          align="center"
          @click="signIn"
          width="100%"
          height="35px"
          :disabled="disabledBtn"
      >Sign In</UiButton>
      <UiAlert v-model="showAlert">
        <p>The email address or password is incorrect.</p>
      </UiAlert>
    </div>
  </div>
</template>

<script>
import { PROFILE_NAME } from '@/router/routes.json'
import { setCookie } from "@/utils/global";
import { required } from 'vuelidate/lib/validators'
import UiInput from '@/components/ui/Input'
import UiButton from "@/components/ui/Button";
import UiAlert from "@/components/ui/Alert";

export default {
  name: "SignIn",
  components: { UiButton, UiInput, UiAlert },

  data: () => ({
    login: '',
    password: '',
    showAlert: false,
    disabledBtn: false
  }),

  validations: {
    login: {
      required
    },
    password: {
      required
    }
  },

  methods: {
    async signIn () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.disabledBtn = true
        await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: this.login,
            password: this.password,
          })
        })
            .then((response) => {
              if (response.status === 200) {
                return response.json()
              } else {
                this.showAlert = true
              }

              return false
            })
            .then((data) => {
              this.disabledBtn = false
              if (data) {
                const date = new Date();
                date.setDate(date.getDate() + 1);

                setCookie({key: 'authToken', value: data.token}, date)
                setCookie({key: 'userId', value: data.id})

                this.$router.push({name: PROFILE_NAME})
              }
            })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/views/signIn.scss";
</style>
