import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyword: '',
    currentCity: '北京'

  },
  getters: {
    showCurrentCity(state) {
      // getter方法一定返回state.currentCity.不能返回其他值
      // return localStorage.getItem('currentCity') || state.currentCity
      let localCity = localStorage.getItem('currentCity')
      // console.log(localCity) //null
      if (localCity) state.currentCity = localCity
      return state.currentCity

    }
  },
  mutations: {
    getWord(state, payload) {
      state.keyword = payload.keyword

    },
    getCurrentCity(state, payload) {
      localStorage.setItem('currentCity', payload.currentCity)
      state.currentCity = payload.currentCity
    }
  },
  actions: {
  },
  modules: {
  }
})
