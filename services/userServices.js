import Api from '~/api/Api.js'
const base = 'v1'

class FetchServices {
  async PostLogin({ request }) {
    const res = await Api.doPost(`${base}/auth/login
    `, request)
    console.debug('GET FETCH', res)
    return res
  }

  async GetProductById({ request }) {
    console.log(request, "requestan")
    const res = await Api.doGet(`${base}/products/`+request.id)
    console.debug('Get User ', res)
    return res
  }
}

export default new FetchServices()
