import Api from '@/api/Api.js'


const base = 'v1'

class FetchServices {

  async PostRegister({ request }) {
    console.log(request);
    const res = await Api.doPost(`${base}/register`, request)
    console.debug('POST REGISTER', res)
    return res
  }



  async PostCreate({ request }) {
    const res = await Api.doPost(`${base}/user`, request)
    console.debug('User Create', res)
    return res
}

  async PostUpdate(id,data) {
    console.log(id, "data id");
    console.log(data,"dataaaa");
    const res = await Api.doPost(`${base}/referalupdate/${id}`, data)
    // const res = await Api.doPut(`${base}/user/${id}`, data)
    // const res = await Api.doPut(`${base}/user/16`, data)
    console.debug('User Update', res)
    return res
  }

  async delete({ request }) {
    console.log(request);
    const res = await Api.doDelete(`${base}/user/${request.id}`)
    console.debug('User delete', res)
    return res
  }

  async PostLogin({ request }) {
    console.log(request);
    const res = await Api.doPost(`${base}/login`, request)
    console.debug('POST Login', res)
    return res
  }


  async GetRef() {
    const res = await Api.doGet(`${base}/refs`,)
    console.debug('Get Ref ', res)
    return res
  }

  async GetPdf() {
    const res = await Api.doGet(`${base}/pdfcustomers`,)
    console.debug('Get User ', res)
    return res
  }

  async GetSidebar() {
    const res = await Api.doGet(`${base}/menu`,)
    console.debug('Get Menu ', res)
    return res
  }

  async PostOtp({ request }) {
    const res = await Api.doPost(`${base}/otp/verify`, request)
    console.debug('POST Login', res)
    return res
  }

  async GetUser() {
    const res = await Api.doGet(`${base}/users`,)
    console.debug('Get User ', res)
    return res
  }

  async GetRole() {
    const res = await Api.doGet(`${base}/rolebyname`,)
    console.debug('Get role by name ', res)
    return res
  }

  async Get() {
    const res = await Api.doGetJson(`/json/user.json`,)
    console.debug('Get User ', res)
    return res
  }



  async GetUserById({ request }) {
    console.log(request, "requestan")
    const res = await Api.doGet(`${base}/user/`+request.id)
    console.debug('Get User ', res)
    return res
  }

}

export default new FetchServices()
