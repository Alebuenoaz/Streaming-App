import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#009EA0",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#A00404",
        info: "#2196F3",
        success: "#05B804",
        warning: "#05B804",
      },
    },
  },
});

export default vuetify;
