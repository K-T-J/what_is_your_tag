import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    backgroundUrl: "https://i.ytimg.com/vi/_7mGvG81Oq4/mqdefault.jpg",
  },
  getters: {},
  mutations: {
    searchMutations(state, value) {
      console.log("value > ", value);
      state.backgroundUrl = value;
    },
  },
  actions: {
    searchByTag({ commit }, search) {
      axios
        .get("https://source.unsplash.com/featured/?" + search.toLowerCase())
        .then((e) => {
          const imgurl = e.request.responseURL;
          commit("searchMutations", imgurl);
        });
    },
  },
  modules: {},
});
