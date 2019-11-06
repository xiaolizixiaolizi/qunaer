import request from './request'
const { get } = request

export async function getCity() {
  return await get('/city')
}