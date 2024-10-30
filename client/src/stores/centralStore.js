import { defineStore } from 'pinia'
import axios from 'axios';
export const useCentralStore = defineStore('central', {
  state: () => ({
    api: "https://fakestoreapi.com/products"
  }),
  actions: {
    async getApi(api) {
      try {
        const response = await axios.get(api)
        return response.data
      } catch (err) {
        /**
         * Logs any errors that occur during the fetch operation.
         */
        console.log(err);
      }
    }
  }
})
