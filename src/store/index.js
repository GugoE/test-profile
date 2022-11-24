import { defineStore } from 'pinia'

import { signIn } from "@/store/api/modules/auth";
import { user } from "@/store/api/modules/users"

export const useStore = defineStore('useStore', {
    state:() => ({}),

    actions: {
        signIn(formData) {
            return new Promise((resolve, reject) => {
                signIn(
                    formData,
                    (res) => {
                        resolve(res)
                    },
                    error => {
                        reject(error)
                    }
                )
            })
        },
        user(id) {
            return new Promise((resolve, reject) => {
                user(
                    id,
                    (res) => {
                        resolve(res)
                    },
                    error => {
                        reject(error)
                    }
                )
            })
        }
    },

    getters: {}
})
