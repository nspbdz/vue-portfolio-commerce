import userServices from '~/services/userServices'
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
  async login(context, payload) {

    try {
      // const res=await userServices.PostLogin({request})
      const res=await this.$auth.loginWith('local', {
        data: payload
      })

      console.log(res, 'responsee')
    } catch (error) {
      showFailedPopup({ msg: error.message })
      console.error(error, 'errornya')
      throw error
    }
  },

  async getFetch(context, payload) {

    try {
      const res = await userServices.GetFetch({})
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
      const res = await userServices.GetProductById({request})
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
