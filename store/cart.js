// import fetchServices from '~/services/fetchServices'
import { showFailedPopup } from '@/helpers/Utils'

export const state = () => ({
  items:[],
// cart : [{id:3,qty:10, title:"500", colors:"white"},{id:5,qty:10, title:"500", colors:"white"}]
cart :[]
})

export const getters = {
  items: (state) => state.items,
  cart: (state) => state.cart,
}

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
  SET_CART(state, items) {

    const findIdProduct = state.cart.filter((data, response) => data.id === items.id )

    console.log(state.cart, 'state')
    console.log(items, 'items')
    console.log(findIdProduct, 'findIdProduct')

    if ((findIdProduct.length === 0) ){
    state.cart.push(items)
    }else{
      if(items.change === '-'){
      findIdProduct[0].qty = findIdProduct[0].qty - 1

      }else if(items.change === '+'){
        findIdProduct[0].qty = findIdProduct[0].qty + 1

        }else{
          findIdProduct[0].qty = findIdProduct[0].qty +items.qty
        }
        return findIdProduct

    }

  },

}

export const actions = {


  async addCart(context, payload) {
    console.log(payload, 'data payload');
    const request={
      id: payload.id,
      qty: payload.qty,
      title: payload.title,
      description: payload.description,
      price: payload.price,
      colors: payload.colors,
      images: payload.images,
    }

    try {

      // console.log(items)
     await context.commit('SET_CART', request)
    } catch (error) {
      showFailedPopup({ msg: error })
      console.error(error)
      throw error
    }
  },

  async minesCart(context, payload) {
    console.log(payload, 'data payload');
    try {
      // console.log(items)
     await context.commit('SET_CART', payload)
    } catch (error) {
      showFailedPopup({ msg: error })
      console.error(error)
      throw error
    }
  },

  async plusCart(context, payload) {
    console.log(payload, 'data plusCart');
    try {
      // console.log(items)
     await context.commit('SET_CART', payload)
    } catch (error) {
      showFailedPopup({ msg: error })
      console.error(error)
      throw error
    }
  },

}
