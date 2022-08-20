import { defineStore } from 'pinia'

export const storeIP = defineStore('storeIP', {
  state: () => {
    return {
      ipAnalyes: 'IPaddress',
    }
  },
  getters: {},
})
