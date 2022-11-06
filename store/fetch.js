import fetchServices from '~/services/fetchServices'
import { showFailedPopup } from '@/helpers/Utils'

export const state = () => ({
  items:[],
  id:[],
})

export const getters = {
  items: (state) => state.items,
  id: (state) => state.id,
}

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
  SET_ID(state, items) {
    state.id = items
  },
}

export const actions = {
  async getFetch(context, payload) {
    try {
      const res = await fetchServices.GetFetch({})
      context.commit('SET_ITEMS', res)
      return res
    } catch (error) {
      showFailedPopup({ msg: error })
      console.error(error)
      throw error
    }
  },
  async getProductById(context, payload) {
    console.log(payload.value);
    const request = {
      id: payload.value,
    }
    try {
      const res = await fetchServices.GetProductById({request})
      context.commit('SET_ID', res)
      console.log(res)
      return res
    } catch (error) {
      showFailedPopup({ msg: error })
      console.error(error)
      throw error
    }
  },
}
