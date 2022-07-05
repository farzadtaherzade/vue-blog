import { createStore } from "vuex";

const store = createStore({
  state: {
    blogs: null,
  },
  getters: {
    addBlogs(state) {
      return state.appName;
    },
  },
});

export default store;
