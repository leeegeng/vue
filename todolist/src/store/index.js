import Vue from 'vue'
import Vuex from 'vuex'

const actions = {
    changeMenu(context, value){
      console.log("actions的changeMenu调用了：", context, value)
      context.commit('CHANGEMENU', value)
    }
}

const mutations = {
  CHANGEMENU(state, value) {
    console.log('mutations CHANGEMENU 调用了：', state, value)
    state.menuShow = !state.menuShow
  }
}

const state = {
  menuShow: true
}

Vue.use(Vuex);

const store = new Vuex.Store({
  actions,
  mutations,
  state,
})

export default store