import request from './request'
const { get } = request

export default new class Bali {
  // https://touch.dujia.qunar.com/list?modules=list%2CbookingInfo%2CactivityDetail&dep=%E4%B8%8A%E6%B5%B7&query=%E5%B7%B4%E5%8E%98%E5%B2%9B&type=all&dappDealTrace=true&it=n_index_desti_recom&date=&ddf=true&needNoResult=true&originalquery=%E5%B7%B4%E5%8E%98%E5%B2%9B&limit=100,20&qsact=scroll
  // 
  async getBali(limit) {
    return await get('/list', {
      modules: 'list,bookingInfo,activityDetail',
      dep: '上海',
      query: '巴厘岛',
      type: 'all',
      dappDealTrace: 'true',
      it: 'n_index_desti_recom',
      date: '',
      ddf: 'true',
      needNoResult: 'true',
      originalquery: '巴厘岛',
      limit: `${limit},20`,
      qsact: 'scroll'
    })
  }
}