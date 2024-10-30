import { defineStore } from 'pinia'
import { useCentralStore } from './centralStore'



export const useClientStore = defineStore('client', {
    state: () => ({
        centralStore: useCentralStore(),
        products: [],
        cart: [],

    }),
    getters: {
        totalAmount: (state) => state.cart.reduce((summary, cart) => summary + cart.price, 0)
    },

    actions: {
        async getProducts() {
            this.products = await this.centralStore.getApi(this.centralStore.api)
            console.log(this.products);
        },
        async addProductToCart(product) {
            product.quantity += 1

            this.cart.unshift(product)
            console.log(this.cart, product.quantity);
        }
    }
})
