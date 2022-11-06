import Api from '~/api/Api.js'

const base = 'v1/referral'

class FetchServices {
  async PostLogin({ request }) {
    const res = await Api.doPost(`${base}/login`, request)
    console.debug('POST REGISTER', res)
    return res
  }

  async PostRegister({ request }) {
    const res = await Api.doPost(`${base}/register`, request)
    console.debug('POST REGISTER', res)
    return res
  }

  async PostVerify({ request }) {
    const res = await Api.doPost(`${base}/verify-otp`, request)
    console.debug('POST VERIFY', res)
    return res
  }

  async getList() {
    const res = await Api.doGet(`${base}/list`)
    console.debug('GET LIST', res)
    return res
  }

  async getSaldo() {
    const res = await Api.doGet(`${base}/saldo`)
    console.debug('GET SALDO', res)
    return res
  }
}

export default new FetchServices()
