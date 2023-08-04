import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    data: [],
  },
  getters: {},
  mutations: {
    initData(state, commit) {
      state.data = commit;
    },
  },
  actions: {
    async fetchData(commit) {
      try {
        await axios
          .get(
            `https://dummyjson.com/products?limit=3`
          )
          .then(async (res) => {
            if (res.status == 200) {
              store.commit("initData", res.data.products);
            }
          })
          .catch((err) => {
            console.log(err);
            return;
          });
      } catch (err) {
        console.log(err);
        return;
      }
    },
  },
});

export default store;
