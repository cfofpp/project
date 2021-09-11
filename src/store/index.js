import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //token
    token:'',
    //我的信息
    profile: {},
    //我喜欢的音乐列表id
    myLikeId:0,
    //当前音乐url
    currentUrl:"",
    //当前歌曲信息
    currentXinxi:{}

  },
  mutations,
  actions,
  modules: {
  }
})
