import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    messages: []
  },
  getters: {
    messages(state){
      return state.messages;
    }
  },
  mutations: {
    ADD_MESSAGE: (state, message) => {
      state.messages.push(message);
    }
  },
  actions: {
    ADD_MESSAGE: (context, message) => {
      // Business logic
      
    }
  }
})