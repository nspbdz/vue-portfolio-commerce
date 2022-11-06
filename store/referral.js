import referralServices from '~/services/referralServices'
import { showFailedPopup } from '~/helpers/Utils'

export const state = () => ({
  list: [],
  saldo: 0,
})

export const getters = {
  getList: (state) => state.list,
  getSaldo: (state) => state.saldo,
}

export const mutations = {
  SET_LIST(state, payload) {
    state.list = payload
  },
  SET_SALDO(state, payload) {
    state.saldo = payload
  },
}

export const actions = {
  async login(context, payload) {
    const request = {
      name: payload.nama,
      no_hp: payload.nohp,
    }

    try {
      const res = await referralServices.PostLogin({ request })

      return res.data
    } catch (error) {
      showFailedPopup({ msg: error })
      console.error(error)
      throw error
    }
  },

  async logout(context, payload) {
    try {
      await this.$auth.logout()
    } catch (error) {
      showFailedPopup({ msg: error })
      console.error(error)
      throw error
    }
  },

  async register(context, payload) {
    const request = {
      name: payload.nama,
      no_hp: payload.nohp,
      referral_code: payload.referralCode || '',
    }

    try {
      const res = await referralServices.PostRegister({ request })

      return res.data
    } catch (error) {
      showFailedPopup({ msg: error })
      console.error(error)
      throw error
    }
  },

  async verifyOtp(context, payload) {
    const request = {
      indentifier: payload.indentifier,
      otp: payload.otp,
    }

    try {
      const res = await referralServices.PostVerify({ request })

      await this.$auth.loginWith('customStrategy', {
        data: {
          token: res.data.access_token,
        },
      })

      return res.data
    } catch (error) {
      showFailedPopup({ msg: error })
      console.error(error)
      throw error
    }
  },
  async list(context, payload) {
    try {
      const res = await referralServices.getList()

      context.commit('SET_LIST', res.data)

      return res.data
    } catch (error) {
      showFailedPopup({ msg: error })
      console.error(error)
      throw error
    }
  },
  async saldo(context, payload) {
    try {
      const res = await referralServices.getSaldo()

      context.commit('SET_SALDO', res.data)

      return res.data
    } catch (error) {
      showFailedPopup({ msg: error })
      console.error(error)
      throw error
    }
  },
}
