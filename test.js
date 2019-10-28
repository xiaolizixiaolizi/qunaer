const qs=require('qs')
let  url='https://touch.dujia.qunar.com/list?modules=list%2CbookingInfo%2CactivityDetail&dep=%E4%B8%8A%E6%B5%B7&query=%E5%B7%B4%E5%8E%98%E5%B2%9B&type=all&dappDealTrace=true&it=n_index_desti_recom&date=&ddf=true&needNoResult=true&originalquery=%E5%B7%B4%E5%8E%98%E5%B2%9B&limit=100,20&qsact=scroll'

let res=qs.parse(url)
console.log(res)
