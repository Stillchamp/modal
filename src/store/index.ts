import { createStore } from 'vuex'

const store = createStore({
  state: {
    message: 'Hello from Vuex!',
  },
  getters: {
    message: (state) => state.message,
  },
})

export default store
