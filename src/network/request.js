import aixos from "axios"
// moment
// https://touch.dujia.qunar.com/list?modules=list%2CbookingInfo%2CactivityDetail&dep=%E4%B8%8A%E6%B5%B7&query=%E5%B7%B4%E5%8E%98%E5%B2%9B&type=all&dappDealTrace=true&it=n_index_desti_recom&date=&ddf=true&needNoResult=true&originalquery=%E5%B7%B4%E5%8E%98%E5%B2%9B&limit=100,20&qsact=scroll
const instance = aixos.create({
  baseURL: 'http://localhost:8088/mock/',
  // baseURL: '/api',
  timeout: 1000 * 60,

})
// 全局设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/json'
instance.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})
instance.interceptors.response.use(response => {
  return response.data
}, err => {
  return Promise.reject(err)
})
export default new class Request {
  // get(url, params = {}) {
  //   return new Promise((resolve, reject) => {
  //     instance.get(url, {
  //       params:params
  //     }).then(res => resolve(res)).catch(err => reject(err))
  //   })
  // }
  get(url, params = {}) {
    return instance.get(url, {
      params
    })
  }
  post(url, params = {}) {
    return instance.post(url, params)
  }
}
