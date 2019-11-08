import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      tasks: [
          {id: 0, title: 'lorem ipsum', completed: true},
          {id: 1, title: 'testowe zadanie', completed: false},
          {id: 2, title: 'dummy content', completed: false},
          {id: 3, title: 'dummy eeee content', completed: false}
      ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
