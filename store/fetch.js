import fetchServices from '~/services/fetchServices'
import { showFailedPopup } from '@/helpers/Utils'

export const state = () => ({
  items:[],
  category:[],
  id:[],
  selected:'',
})

export const getters = {
  items: (state) => state.items,
  id: (state) => state.id,
  selected: (state) => state.selected,
  category: (state) => state.category,
}

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
  SET_ID(state, items) {
    state.id = items
  },
  SET_CATEGORY(state, items) {
    state.category = items
  },
  SET_SELECTED(state, items) {
    state.selected = items
  },
}

export const actions = {


  async getCategory(context, payload) {
    try {
      const res = await fetchServices.GetCategory({})
      context.commit('SET_CATEGORY', res)
      return res
    } catch (error) {
      showFailedPopup({ msg: error })
      console.error(error)
      throw error
    }
  },

  async getSelected(context, payload) {
    console.log(payload.value, 'selected')
    try {
      await context.commit('SET_SELECTED', payload.value)
    } catch (error) {
      showFailedPopup({ msg: error })
      console.error(error)
      throw error
    }
  },

  async getFetch(context, payload) {
    let request='';
    if(payload !== ''){
       request={
        select:payload.select,
        categories:payload.categories
      }
    }
    console.log(request, 'requestan')
    try {

      const res = await fetchServices.GetFetch({request})
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
