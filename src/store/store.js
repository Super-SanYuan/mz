import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let cart = [{
    id: 1101,
    name: '香烟',
    price: 18,
    info: '嚼到脸变形',
    count: 0
  },
  {
    id: 1102,
    name: '瓜子',
    price: 6,
    info: '嚼到脸变形',
    count: 0
  },
  {
    id: 1103,
    name: '方便面',
    price: 5,
    info: '嚼到脸变形',
    count: 0
  },
  {
    id: 1104,
    name: '槟榔',
    price: 15,
    info: '嚼到脸变形',
    count: 0
  },
  {
    id: 1105,
    name: '青岛',
    price: 9,
    info: '嚼到脸变形',
    count: 0
  },
  {
    id: 1106,
    name: '老白沙',
    price: 8,
    info: '嚼到脸变形',
    count: 0
  },
]

const state = {
  show: false,
  cart,
}

const actions = {
  show({
    commit
  }) {
    // 去 mutations 找 show 方法
    commit('show')
  }
}
const mutations = { // 具体实现逻辑
  show(state) {
    state.show = !state.show
  },
  add(state, id) {
    state.cart.forEach(item => {
      if (item.id == id) {
        item.count++
      }
    })
  },
  sub(state, id) {
    for (var i = 0; i < state.cart.length; i++) {
      if (state.cart[i].id == id) {
        if (state.cart[i].count == 0) return
        state.cart[i].count--;
        break;
      }
    }
  }
}

const getters = {
  sum: state => {
    let sum = 0
    state.cart.forEach((item) => {
      sum += item.count * item.price
    })
    return sum
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
