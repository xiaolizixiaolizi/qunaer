import request from './request'
const { get } = request
// http://localhost:8081/mock/index.json
export async function getHomeInfo() {
  return await get('/index.json')

}